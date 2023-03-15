import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ClearIcon from '@mui/icons-material/Clear'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import DownloadIcon from '@mui/icons-material/Download'
import DeleteIcon from '@mui/icons-material/Delete'
import LoadIconButton from './LoadIconButton'
import { Grid } from '@mui/material'
import { downloadPastExport, deleteExport, getExports } from '../api/device/ExportAppsService'

export default function BasicTable (jobs, deleteJobs, clearAllFinishedJobs, clearAllButtonisDisabled) {
  const rows = jobs?.sort((a, b) => b.id - a.id).map(j => ({ id: j.id, description: j.description, status: j.status, message: j.result.message }))
  const [exports, setExports] = React.useState([])

  React.useEffect(() => {
    if (exports.length === 0) {
      fetchExports()
    }
  }, [])

  const fetchExports = async () => {
    const exports = await getExports()
    setExports(exports)
  }

  const handleDownloadPastExport = async (exportId) => {
    if (exports.includes(exportId)) {
      await downloadPastExport(exportId)
    }
  }

  const handleDeleteExport = async (exportId) => {
    if (exports.includes(exportId)) {
      const answer = await deleteExport(exportId)
      if (answer.status === 200) {
        await fetchExports()
      }
    }
  }

  const checkExport = (exportId) => {
    return exports.includes(exportId)
  }

  return (
    <React.Fragment>
      <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="h12"
            id="tableTitle"
            component="div"
          >
            Installation Log
          </Typography>
          <Tooltip title={'Clear the log (this does not uninstall or remove any apps or instances)'}>
            <div>
            <Button variant='outlined' sx={{ mr: 1 }} disabled={clearAllButtonisDisabled} data-testid='clear-all-button' onClick={() => clearAllFinishedJobs()}>
              Clear All
            </Button>
            </div>
          </Tooltip>
      </Toolbar>
      <TableContainer>
        <Table size='small' aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Action</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Clear</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{(row.description === 'Creating export' && row.status === 'successful')
                  ? <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                      <LoadIconButton disabled={!checkExport(row.message)} onClick={() => handleDownloadPastExport(row.message)} icon={<DownloadIcon aria-label='download-button' sx={{ cursor: 'pointer' }} />}/>
                      <LoadIconButton disabled={!checkExport(row.message)} onClick={() => handleDeleteExport(row.message)} icon={<DeleteIcon aria-label='delete-button' sx={{ cursor: 'pointer' }} />}/>
                    </Grid>
                  : null}
                </TableCell>
                <TableCell align="left">{row.status !== 'running' ? <ClearIcon aria-label='clear-button' fontSize='10' sx={{ cursor: 'pointer' }} onClick={() => deleteJobs(row.id)}></ClearIcon> : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}
