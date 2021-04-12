import React, { useReducer, useEffect, useRef } from 'react';
import dva, { connect } from 'dva';
import { request, getLocaleLan } from 'client/utils/index.js';
import Header from 'client/components/Header';
import TouchEl from 'client/components/TouchEl';
// import Hammer from 'hammerjs';
import styles from './index.m.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);


function index() {
  const meRef = useRef();
  const testRef = useRef('test');
  let delta = 0;
  const list = [
    { icon: 'code', title: 'Redemption Code' },
    { icon: 'bill', title: 'Purchased List' },
    { icon: 'friends', title: 'Invite friends' },
    { icon: 'help', title: 'Help center' },
    { icon: 'about', title: 'About us' },
    { icon: 'logout', title: 'Logout' },
  ];
  useEffect(() => {
    // const { current } = meRef
    // console.log(meRef, 'meRef')
    // var mc = new Hammer(current);
    // mc.on("swipeleft", function(ev) {
    //   console.log(ev,'pan');
    // });
  }, [])

  const panHandle = (ev) => {
    const { current } = meRef;
    const height = document.body.clientHeight;
    let i = 0;
    if (current.scrollTop == 0) {
      if (!delta) {
        delta = parseInt(ev.deltaY)
      } else {
        i = Math.abs(parseInt(ev.deltaY) - delta) / height
      }
      console.log(ev)
      testRef.current.style.cssText = `transform: scaleY(${1 + i})`
    }

  }

  return (
    <TouchEl
      onPan={panHandle.bind(this)}
      onPanEnd={() => {
        console.log('end')
        delta = 0;
        testRef.current.style.cssText = `transform: scaleY(1)`
      }}
      onPanCancel={() => {
        console.log('cancel')
        delta = 0;
        testRef.current.style.cssText = `transform: scaleY(1)`
      }}
    >
      <div ref={meRef} className={cx('me_wrap')}>
        <Header />
        <div ref={testRef} className={cx('banner_img')}>
          <div className={cx('avatar')}></div>
        </div>
        <div className={cx('me_box')}>
          <div className={cx('diamond_w')}>
            <div className={cx('title')}>My Wallet</div>
            <div className={cx('d_w')}>
              <div className={cx('d_coin')} />
              <div className={cx('con')}>999<span>coins</span></div>
              <div className={cx('btn')}>GET MORE</div>
            </div>
          </div>
          {
          list.map((item, index) => {
            const { title, icon } = item;
            return <div className={cx('list',index==0?'first_child':'')} key={index}>
              <div className={cx('_icon', icon)} />
              <div className={cx('title_')}>{title}</div>
              <div className={cx('go_icon')} />
            </div>
          })
        }
        </div>
      </div>
    </TouchEl>
  );
}

const App = connect(({ count }) => ({
  count,
}))(index)
export default App;