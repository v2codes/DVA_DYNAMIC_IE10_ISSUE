import React, { Component } from 'react'
import { connect } from 'dva';
// import { withRouter } from 'react-router-dom';
// import { withRouter } from 'umi';

@connect(({ infomodel, loading }) => ({
  info: infomodel.info,
  loading: loading.effects['infomodel/getInfo'],
}))
export default class Info extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'infomodel/getInfo',
      payload: {},
    })
  }


  render() {
    const { info, loading } = this.props
    return (
      <div>
        {loading && <span>loading...</span>}

        {!loading && info &&
          <div>
            ID:{info.id},name:{info.name},address:{info.address}
          </div>
        }
      </div>
    )
  }
}
