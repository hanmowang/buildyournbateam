import { reduce } from 'lodash'
import React, { Component, forwardRef } from 'react'
import MaterialTable from '@material-table/core'

import CircularProgress from '@mui/material/CircularProgress'
import ArrowDownward from '@mui/icons-material/ArrowDownward'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Clear from '@mui/icons-material/Clear'
import FilterList from '@mui/icons-material/FilterList'
import FirstPage from '@mui/icons-material/FirstPage'
import LastPage from '@mui/icons-material/LastPage'
import SaveAlt from '@mui/icons-material/SaveAlt'
import Search from '@mui/icons-material/Search'
import ViewColumn from '@mui/icons-material/ViewColumn'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <div />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

@responsive
export default class playerCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      player_name : ""
    }
  }

  loadDataset = () => {
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.refresh && !this.state.isLoading) {
      this.loadDataset()
        .then(() => this.props.refreshDone())
    }
  }

  componentDidMount() {
    this.loadDataset()
  }

  render() {
    const { nav, onRowClick, onMobile } = this.props
    const { players, isLoading, showFilters, hiddenColumns, filterValues } = this.state

    const title = nav('Players')

    const columns = [
      { title: 'Player Name', field: 'player_name', defaultFilter: filterValues.player_name },
      { title: 'Team', field: 'team', defaultFilter: filterValues.team },
      { title: 'Points', field: 'points', defaultFilter: filterValues.points },
      { title: 'Rebounds', field: 'rebounds', defaultFilter: filterValues.rebounds },
      { title: 'Assists', field: 'assists', defaultFilter: filterValues.assists },
    ]

    const options = {
      search: true,
      filtering: showFilters,
      columnsButton: true,
      pageSize: 5,
      filterCellStyle: {
        fontFamily: FONT_FAMILY,
        backgroundColor: '#F2F7F8',
        paddingTop: '5px',
        paddingBottom: '10px',
      },
      rowStyle: {
        fontFamily: FONT_FAMILY,
        fontSize: '12px',
        whiteSpace: 'pre',
      },
      headerStyle: {
        fontFamily: FONT_FAMILY,
        fontSize: '16px',
        whiteSpace: 'pre',
      },
      searchFieldStyle: {
        fontFamily: FONT_FAMILY,
        fontSize: '14px',
      },
      sorting: true
    }

    const actions = [
      {
        icon: () => <FilterList />,
        tooltip: 'Enable/Disable Filtering',
        isFreeAction: true,
        onClick: () => this.setState(prevState => ({showFilters: !prevState.showFilters }))
      }
    ]

    return (
      <div>
        <Dialog fullScreen={onMobile} open={isLoading} fullWidth maxWidth="xs" PaperProps={{ style: { width: 300 } }}>
          <DialogContent style={{...onMobile && {padding: '8px 12px'}}}>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <CircularProgress/>
            </div>
            <DialogContentText
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 16,
                fontWeight: 400,
                color: '#232f3ec7',
                textAlign: 'center'
              }}
            >
              Loading player data
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <MaterialTable
          title={title}
          columns={columns}
          data={players}
          options={options}
          actions={actions}
          icons={tableIcons}
          onChangeColumnHidden={(column, hidden) => this.setState(prevState => ({hiddenColumns: {...prevState.hiddenColumns, [column.field]: hidden} }) )}
          onRowClick={(rowData, rowMeta) => onRowClick(rowMeta)}
        />
      </div>
    )
  }
}
