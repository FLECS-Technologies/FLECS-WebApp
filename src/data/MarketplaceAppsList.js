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

export const marketPlaceAppsList = [
  {
    app: 'com.codesys.control',
    avatar:
      'https://store.codesys.com/media/catalog/product/cache/adefa4dac3229abc7b8dba2f1e919681/c/o/codesys-200px_1.png',
    title: 'CODESYS Control',
    author: 'CODESYS GmbH',
    version: '4.2.0.0',
    description: 'IEC61131-3 Runtime.',
    availability: 'available',
    status: 'uninstalled',
    multiInstance: true,
    instances: [],
    relatedLinks: [
      {
        text: 'Buy',
        link: 'https://store.codesys.com/de/codesys-control-for-linux-sl-bundle.html'
      },
      {
        text: 'Documentation',
        link: 'https://help.codesys.com/webapp/_lnx_f_help;product=codesys_control_for_linux_sl;version=4.2.0.0'

      },
      {
        text: 'Download IDE',
        link: 'https://store.codesys.com/de/codesys.html'
      }
    ]
  },
  {
    app: 'com.codesys.edge',
    avatar:
      'https://store.codesys.com/media/catalog/product/cache/adefa4dac3229abc7b8dba2f1e919681/c/o/codesys-200px_1.png',
    title: 'CODESYS Edge Gateway',
    author: 'CODESYS GmbH',
    version: '4.2.0.0',
    description: 'Gateway to connect to CODESYS RTS.',
    availability: 'available',
    status: 'uninstalled',
    multiInstance: false,
    instances: [],
    relatedLinks: [
      {
        text: 'Download IDE AddOn',
        link: 'https://store.codesys.com/en/codesys-edge-gateway-for-linux.html'

      },
      {
        text: 'Download IDE',
        link: 'https://store.codesys.com/de/codesys.html'
      }
    ]
  },
  {
    app: 'org.mosquitto.broker',
    avatar:
      'https://d1q6f0aelx0por.cloudfront.net/product-logos/library-eclipse-mosquitto-logo.png',
    title: 'Mosquitto MQTT',
    author: 'Eclipse Foundation',
    version: '2.0.14-openssl',
    description: 'MQTT broker.',
    availability: 'available',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'org.openjsf.node-red',
    avatar: 'https://nodered.org/about/resources/media/node-red-icon.png',
    title: 'Node-RED',
    author: 'OpenJS Foundation',
    version: '2.1.4',
    description: 'Low code programming.',
    availability: 'available',
    status: 'uninstalled',
    multiInstance: false,
    editor: ':1880',
    instances: [],
    relatedLinks: [
      {
        text: 'Create First Flow',
        link: 'https://nodered.org/docs/tutorials/first-flow'

      },
      {
        text: 'User Guide',
        link: 'https://nodered.org/docs/user-guide/'
      }
    ]
  },
  {
    app: 'com.influxdata.influxdb',
    avatar:
      'https://influxdata.github.io/branding/img/downloads/influxdata-logo--symbol--pool.svg',
    title: 'InfluxDB',
    author: 'InfluxData Inc.',
    version: '2.1.1',
    description: 'Time series data platform.',
    availability: 'available',
    status: 'uninstalled',
    multiInstance: false,
    editor: ':8086',
    instances: [],
    relatedLinks: [
      {
        text: 'Pricing',
        link: 'https://www.influxdata.com/influxdb-pricing/'

      },
      {
        text: 'Documentation',
        link: 'https://docs.influxdata.com/influxdb/v2.0/'
      }
    ]
  },
  {
    app: 'com.influxdata.telegraf',
    title: 'Telegraf',
    version: '1.21.1',
    description: 'Data collection Agent for InfluxDB',
    author: 'InfluxData Inc.',
    avatar: 'https://influxdata.github.io/branding/img/downloads/influxdata-logo--symbol--pool.svg',
    availability: 'available',
    status: 'uninstalled',
    editor: ':8086',
    multiInstance: false,
    instances: [],
    relatedLinks: [
      {
        text: 'Integrations',
        link: 'https://www.influxdata.com/products/integrations/'

      },
      {
        text: 'Documentation',
        link: 'https://docs.influxdata.com/telegraf/v1.21/'
      }
    ]
  },
  {
    app: 'ch.inasoft.sql4automation',
    title: 'SQL4Automation',
    version: 'v4.0.0.6',
    description: 'Connect your device with SQL DB',
    author: 'Inasoft GmbH',
    avatar: 'https://www.sql4automation.com/img/favicons/open-graph.png?v=1516616065075',
    availability: 'available',
    status: 'uninstalled',
    multiInstance: false,
    instances: [],
    relatedLinks: [
      {
        text: 'Buy',
        link: 'https://www.sql4automation.com/en/license-models/purchase_offer.php'

      },
      {
        text: 'Documentation',
        link: 'https://www.sql4automation.com/en/functionality/database-connection/1_configure.php'
      }
    ]
  },
  {
    app: 'com.logicals.logiCAD',
    avatar:
      'https://www.logicals.com/images/logos/logo_retina.png',
    title: 'logi.CAD',
    author: 'logi.cals GmbH',
    version: '1.104.0',
    description: 'CONFIRMED: IEC61131-3 Runtime.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: [],
    relatedLinks: [
      {
        text: 'Inquiry',
        link: 'https://www.logicals.com/en/about-us/send-inquiry'

      },
      {
        text: 'Forum',
        link: 'https://www.logicals.com/de/support/forum'
      }
    ]
  },
  {
    app: 'com.openplc.openplc',
    avatar:
      'https://www.openplcproject.com/assets/img/openplc-white.png',
    title: 'OPENPLC',
    author: 'Thiago Alves',
    version: '1.26.0',
    description: 'CONFIRMED: IEC61131-3 Runtime.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.frankaemika.world',
    avatar:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1483446240/aybpyqz0difmnojadxfi.png',
    title: 'FRANKA WORLD',
    author: 'Franka Emika GmbH',
    version: '3.21.11',
    description: 'CONFIRMED: Franka Emika Robot.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.wago.kbusdeamon',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wago-logo.png/800px-Wago-logo.png',
    title: 'WAGO K-Bus Deamon',
    author: 'Jesse Cox & Kurt Braun',
    version: '3.21.11',
    description: 'CONFIRMED: Access WAGO K-Bus.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.mirasoft.cloudadapter',
    avatar:
      'https://www.anyviz.io/wp-content/uploads/2021/06/AnyViz-Logo-Compact.svg',
    title: 'AnyViz Cloud Adapter',
    author: 'Mirasoft GmbH & Co. KG',
    version: '6.3.9',
    description: 'CONFIRMED: Adapter to AnyViz Cloud.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: [],
    relatedLinks: [
      {
        text: 'Create Account',
        link: 'https://portal.anyviz.de/'

      },
      {
        text: 'Getting started',
        link: 'https://www.anyviz.io/getting-started/'
      }
    ]
  },
  {
    app: 'com.honeywell.matriconopcua',
    avatar:
      'https://pbs.twimg.com/profile_images/1133980019/squiggle_icon_400x400.png',
    title: 'Matricon OPC UA',
    author: 'Honeywell International Inc.',
    version: '2.1.3',
    description: 'OPC UA Stack.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.teamviewer.teamvieweriot',
    avatar:
      'https://static.teamviewer.com/resources/2019/07/TeamViewer_Logo_512x512.png',
    title: 'TeamViewer IoT',
    author: 'TeamViewer Germany GmbH',
    version: '5.8.0',
    description: 'Easy fleet management.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.inductiveautomation.ignition',
    avatar:
      'https://store-images.s-microsoft.com/image/apps.42258.faa5b89b-233a-4809-85c3-0859706a9831.65aa2a1c-12c2-40d4-b65f-a3ac1cf5ef3f.c95e2301-35cb-4723-9421-9a5eb903cf86',
    title: 'Ignition',
    author: 'Inductive Automation Inc.',
    version: '8.1.11',
    description: 'The Unlimited Platform for SCADA.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.ininet.spidercontrol',
    avatar:
      'https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/76/1a/fd/761afd33-ebb4-d1fd-d0ce-b2b4e630e29f/source/512x512bb.jpg',
    title: 'SpiderControl',
    author: 'iniNet Solutions GmbH',
    version: '2.06.0',
    description: 'Visu and SCADA Framework.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.selmotechnology.selmo',
    avatar:
      'https://app.selmo.at/fileadmin/introduction/images/MA_B_Logo_SELMO.png',
    title: 'SELMO',
    author: 'SELMO Technology GmbH',
    version: '2.06.0',
    description: 'PLC code generator.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.triomotion.robotics',
    avatar:
      'http://www.triomotion.uk/images/layout/logoColour.png',
    title: 'Robotics',
    author: 'Trio Motion Technology',
    version: '5.9.0',
    description: 'Robotics Firmware.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.wandelbots.teaching',
    avatar:
      'https://cdn.startbase.com/images/company/wandelbots/4c5dadd15a/',
    title: 'Wandelbots Teaching',
    author: 'Wandelbots GmbH',
    version: '3.0.0',
    description: 'No-Code robotic platform.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.energyrobotics.teaching',
    avatar:
      'https://uploads-ssl.webflow.com/60f98fd6b8e7d653f38541b3/60faa24f6bfbf382fc5d8ca7_logo.svg',
    title: 'Robot Control',
    author: 'Energy Robotics GmbH',
    version: '6.10.0',
    description: 'Autonomous mobile robot control.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.isac.iliumpac',
    avatar:
      'http://www.isacsrl.eu/wp-content/themes/isac-2016/dist/images/logo-isac.svg',
    title: 'Ilium PAC',
    author: 'Isac S.r.l.',
    version: '4.42',
    description: 'Programmable Automation Controller.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.openrobotics.ros',
    avatar:
      'https://www.ros.org/imgs/logo-white.png',
    title: 'ROS',
    author: 'Open Robotics',
    version: '2.10',
    description: 'Robotic Operating System.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.linmot.servo',
    avatar:
      'https://linmot.com/de/wp-content/themes/linmot/img/logo.png',
    title: 'Servo Drive',
    author: 'NTI AG LinMot & MagSpring',
    version: '9.3.2',
    description: 'LinMot Servo Drive.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.acontis.ethercat',
    avatar:
      'https://www.acontis.com/files/img/acontislogo.png',
    title: 'EtherCAT Master',
    author: 'acontis technologies GmbH',
    version: '3.4.1',
    description: 'EtherCAT Master stack.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.beeond.opcua',
    avatar:
      'https://beeond.net/wp-content/uploads/2021/02/beeond-303.jpg',
    title: 'EdgeXConnect',
    author: 'Beeond, Inc.',
    version: '1.1',
    description: 'No code OPC UA Server.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.hilscher.cifx',
    avatar:
      'https://www.hilscher.com/fileadmin/templates/doctima_2013/resources/Images/logo_hilscher.png',
    title: 'netX Profinet Device',
    author: 'Hilscher GmbH',
    version: '6.1.3',
    description: 'Profinet Device Stack.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.litmus.edge',
    avatar:
      'https://s3.amazonaws.com/company-photo.theladders.com/1065/5b7c142b-ff34-410a-9008-d388c5ef6fdc.png',
    title: 'Litmus Edge',
    author: 'Litmus Automation Inc.',
    version: '7.2.8',
    description: 'Data collection, and analytics platform.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.universalautomation.1499',
    avatar:
      'https://universalautomation.org/app/themes/UniversalAutomation/build/images/logo.svg?id=a1a2950c226477a79ca2',
    title: '1499',
    author: 'UniversalAutomation.org AISBL',
    version: '7.2.8',
    description: '1499 Runtime.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.eclipse.4diac',
    avatar:
      'https://www.eclipse.org/4diac/img/4diac.png',
    title: '1499',
    author: 'Eclipse Foundation',
    version: '2.0.0',
    description: '1499 Runtime.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  },
  {
    app: 'com.fraunhofer.stationconnector',
    avatar:
      'https://avatars.githubusercontent.com/u/155854?s=280&v=4',
    title: 'StationConnector',
    author: 'Fraunhofer IPA',
    version: '12.5.0',
    description: 'Highspeed machine data collection.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.visualys.stationconnector',
    avatar:
      'https://www.visualys.net/wp-content/uploads/2019/08/VISUALYS-grau-gruen.png',
    title: 'Visualys Connector',
    author: 'VISUALYS GmbH',
    version: '6.23.0',
    description: 'Centralized maschine monitoring.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.synostik.synostik',
    avatar:
      'https://www.synostik.de/images/design/logo/Logo_dunkel.svg',
    title: 'Synostik Connector',
    author: 'Synostik GmbH',
    version: '1.12.5',
    description: 'Machine diagnostics.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.pragmaticindustries.oemhub',
    avatar:
      'https://pragmaticindustries.com/wp-content/uploads//2021/09/pi-web_white.svg',
    title: 'OEM Hub',
    author: 'Pragmatic Industries GmbH',
    version: '4.8.9',
    description: 'Machine digitalization.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.anydesk.remote',
    avatar:
      'https://anydesk.com/_static/img/logos/anydesk-logo-40fe6c.svg',
    title: 'AnyDesk Remote',
    author: 'AnyDesk Software  GmbH',
    version: '7.0.4',
    description: 'Remote access.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.atvise.hmi',
    avatar:
      'https://www.atvise.com/images/atvise/logos/atvise-dark.svg',
    title: 'atvise hmi',
    author: 'Bachmann Visutec GmbH',
    version: '2.2.4',
    description: 'HMI',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: false,
    instances: []
  },
  {
    app: 'com.wibu.codemeter',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Wibu-Systems_logo.png',
    title: 'CodeMeter',
    author: 'WIBU-SYSTEMS AG',
    version: '2.6.0',
    description: 'Licensing software.',
    availability: 'unavailable',
    status: 'uninstalled',
    multiInstance: true,
    instances: []
  }
]
