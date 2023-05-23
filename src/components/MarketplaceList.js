/*
 * Copyright (c) 2021 FLECS Technologies GmbH
 *
 * Created on Tue Nov 30 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SearchBar from './SearchBar'
import CloudOffIcon from '@mui/icons-material/CloudOff'
import { getAppIcon, getAuthor, getAverageRating, getBlacklist, getCustomLinks, getId, getCategories, getProducts, getRatingCount, getRequirement, getReverseDomainName, getShortDescription, getVersions } from '../api/marketplace/ProductService'
import { CircularProgress, Collapse, Typography } from '@mui/material'
import { AppFilter } from './AppFilter'
import { ReferenceDataContext } from '../data/ReferenceDataContext'
import { getInstalledVersions } from '../data/AppList'
import { FilterContext } from '../data/FilterContext'

export default function MarketplaceList (props) {
  const executedRef = React.useRef(false)
  const [products, setProducts] = useState()
  const { appList } = useContext(ReferenceDataContext)
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)
  const [loadedProducts, setLoadedProducts] = useState([])
  const { categories, hiddenCategories, hiddenCategoriesHasUpdated, setHiddenCategoriesHasUpdated, handleSetHiddenCategories, isCategoryHidden, queryParams, setQueryParams, getFilteredProducts, setAvailableFilter, setCategoryFilter, setSearchFilter, toggleFilter, showFilter, finalProducts } = React.useContext(FilterContext)

  const createFinalProducts = () => {
    const productCards = createProductCards(finalProducts)
    console.log({ productCards })
    setProducts(productCards)
  }

  React.useEffect(() => {
    getFilteredProducts(loadedProducts)
  }, [queryParams, loadedProducts])

  React.useEffect(() => {
    createFinalProducts()
  }, [finalProducts])

  const loadProducts = useCallback(async () => {
    try {
      getProducts(queryParams)
        .then(
          (loadedProducts) => {
            try {
              loadedProducts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))
              setLoadedProducts(loadedProducts)
              setQueryParams(previousState => {
                return { ...previousState, caller: 'loadProducts' }
              })
              setLoadingError(false)
            } catch (error) { console.log(error) }
          },
          error => {
            const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.reason) ||
          error.message ||
          error.toString()
            console.log(resMessage)
            setLoadingError(true)
          }
        )
        .finally(function () { setLoading(false) })
    } catch (error) {
      console.log(error.response)
    }
  }, [appList])

  function createProductCards (newProducts) {
    let productCards = []
    if (newProducts) {
      productCards = newProducts.map((app) => (
        <Card
          key={getReverseDomainName(app) ? getReverseDomainName(app) : app?.id}
          appKey={{
            name: getReverseDomainName(app),
            version: appList?.find(o => o.appKey.name === getReverseDomainName(app))?.appKey.version
          }}
          avatar={getAppIcon(app)}
          title={app.name}
          author={getAuthor(app)}
          description={getShortDescription(app)}
          status={appList?.find(o => o.appKey.name === getReverseDomainName(app))?.status || 'uninstalled'}
          availability={app.stock_status}
          relatedLinks={getCustomLinks(app)}
          requirement={getRequirement(app)}
          versions={getVersions(app)}
          id={getId(app)}
          categories={getCategories(app)}
          average_rating={getAverageRating(app)}
          rating_count={getRatingCount(app)}
          blacklist={getBlacklist(app)}
          installedVersions={getInstalledVersions(appList, getReverseDomainName(app))}
        />
      ))
      return productCards
    }
  }

  function updateProductCards () {
    if (products && appList && !hiddenCategoriesHasUpdated) {
      const updatedProducts = products.map((app) => ({
        ...app,
        props: {
          ...app.props,
          status: appList?.find(o => o.appKey.name === app.props.appKey.name)?.status || 'uninstalled',
          version: appList?.find(o => o.appKey.name === app.props.appKey.name)?.appKey.version,
          installedVersions: getInstalledVersions(appList, app.props.appKey.name)
        }
      }))
      setProducts(updatedProducts)
    } else if (products && appList && hiddenCategoriesHasUpdated) {
      const updatedProducts = products.map((app) => ({
        ...app,
        props: {
          ...app.props,
          hidden: isCategoryHidden(getCategories(app.props))
        }
      }))
      setHiddenCategoriesHasUpdated(false)
      setProducts(updatedProducts)
    }
  }

  React.useEffect(() => {
    if (!loading) {
      // update the product cards if the view is currently not loading
      updateProductCards()
    } else {
      // else create the product cards and make sure we only run it once
      if (executedRef.current) { return }
      loadProducts(appList)
      executedRef.current = true
    }
  }, [appList])

  React.useEffect(() => {
    setCategoryFilter()
  }, [hiddenCategories])

  return (
  <Box aria-label="marketplace-apps-list" display="flex">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', mr: 2, mb: 2 }}>

              <SearchBar key='search-bar' data-testid='search-bar' defaultSearchValue={queryParams.search} searchTitle='Search apps by author, title or description' setToggleFilter={toggleFilter} search={setSearchFilter}/>
              <Collapse key='filter' in={showFilter} timeout="auto" unmountOnExit>
                <AppFilter open={showFilter} setAvailableFilter={setAvailableFilter} availableFilter={(queryParams.available)} handleSetHiddenCategories={handleSetHiddenCategories} categories={categories} hiddenCategories={hiddenCategories} />
              </Collapse>

        </Grid>
        {loading && (
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mr: 2, mb: 2, mt: 2 }}>
            <CircularProgress color='primary'></CircularProgress>
          </Grid>
        )}
        {loading && (
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mr: 2, mb: 2 }}>
            <Typography>Let&apos;s see what we can find for you in our marketplace...</Typography>
          </Grid>
        )}
        {(loadingError && !loading) &&
        (<Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mr: 2, mb: 2, mt: 2 }}>
          <CloudOffIcon fontSize='large'/>
        </Grid>)}
        {(loadingError && !loading) &&
        (<Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mr: 2, mb: 2 }}>
            <Typography>Oops... Sorry, we failed to load apps from the marketplace. Please try again later.</Typography>
          </Grid>)
        }
        {products}
      </Grid>
    </Box>
  )
}

MarketplaceList.propTypes = {
  appData: PropTypes.any,
  app: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  version: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  availability: PropTypes.string,
  instances: PropTypes.array,
  relatedLinks: PropTypes.array
}
