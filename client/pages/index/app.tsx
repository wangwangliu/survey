import React, { useState, useEffect, useRef } from 'react';
import dva, { connect } from 'dva';
import Slide from 'client/components/Draw/slide';
import TouchEl from 'client/components/TouchEl';
import { loginFunc } from 'client/utils/globalVar'
import store from 'store2';
import get from 'lodash/get';
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './app.m.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);


function Index(props) {
  const { children, show, curr, showLoginModal, isNeedLogin, dispatch, userInfo, author } = props;
  const emailRef = useRef();
  const passwordRef = useRef();
  const [is_check, setCheck] = useState(true);

  return (
    <div className={cx('main_wrap')}>
      {children}
    </div>
  );
}
const mapStateToProps = ({ global: { bottomBar: { show, curr }, showLoginModal, userInfo, isNeedLogin } }) => {
  return {
    show,
    curr,
    showLoginModal,
    userInfo,
    isNeedLogin
  };
};
export default connect(mapStateToProps)(Index);
