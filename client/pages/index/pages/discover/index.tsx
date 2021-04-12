import React, { useState, useEffect } from 'react';
import dva, { connect } from 'dva';
import { Toast, Modal, Progress } from 'antd-mobile';
import Card from 'client/pages/index/components/Card/index';
import Header from 'client/components/Header';
import styles from './index.m.scss';
import get from 'lodash/get';
import remove from 'lodash/remove';
import img from 'client/pages/index/images/top.jpg';
import store from 'store2';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

let parameter: any = [];
let phone: string = '';

function index(props) {
  const {
    question,
    dispatch,
    modal,
    successModal,
    percent,
    loading: { effects }
  } = props;

  const [param, setParam] = useState<any[]>([]);
  // const [modal, setModal] = useState(false);

  useEffect(() => {
    // setModal(true)
    dispatch({
      type: 'global/update',
      payload: {
        modal: store('protocol') ? false : true
      }
    })
  }, [])

  return (
    <div className={cx('discover_wrap')}>
      <Header />
      <div className={cx('progress')}>
        <Progress position={'normal'} barStyle={{ border: '1px solid #cd0e2d' }} percent={percent} />
      </div>
      <div className={cx('slider')}>
        <img src={img} />
        <div className={cx('p_d', 'l')}>J.D. Power趣味测试：</div>
        <div className={cx('p_d', 'll')}>快来康康你是哪类买车人？</div>
      </div>
      <div className={cx('question_box')}>
        {
          !!question.length &&
          question.map((item, index) => {
            return <Card {...item} className={cx('q_list')} key={index} onClick={(item) => {
              if (!!parameter.length) {
                parameter = parameter.filter((n, index) => {
                  return get(n, 'qnrId') != get(item, 'qnrId')
                })
              }
              if(get(item,'type')==2&&!get(item,'answer').length){
                dispatch({
                  type: 'discover/update',
                  payload: {
                    percent: ((parameter.length) / (question.length + 1)) * 100
                  }
                })
                setParam(parameter);
                // console.log(parameter,'parameter===')
                return
              }
              parameter.push(item);
              setParam(parameter);
              dispatch({
                type: 'discover/update',
                payload: {
                  percent: ((parameter.length) / (question.length + 1)) * 100
                }
              })
              // console.log(percent, parameter, 'percent', (parameter.length) / (question.length + 1), `parseInt((parameter.length)/(question.length+1))`, parameter.length)
            }} />
          })
        }
        <div className={cx('phone')}>
          请留下您的手机号，后续中奖后我们将通过此联系方式和您取得联系发放礼品：<input
            onChange={(e) => {
              const { value } = e.target;
              phone = value;
              parameter = parameter.filter((n, index) => {
                return get(n, 'qnrId') != 12
              });
              if(value==''){
                dispatch({
                  type: 'discover/update',
                  payload: {
                    percent: ((parameter.length) / (question.length + 1)) * 100
                  }
                })
                setParam(parameter);
                return
              }
              parameter.push({ "qnrId": 12, "type": 3, "answer": [], "content": value });
              setParam(parameter);
              dispatch({
                type: 'discover/update',
                payload: {
                  percent: ((parameter.length) / (question.length + 1)) * 100
                }
              })
            }} placeholder="请输入手机号" type="tel" />
        </div>
      </div>

      <div className={cx('btn_wrap')}>
        <div className={cx('btn_', param.length == 12 ? '' : 'disb_')}
          onClick={() => {
            if (param.length != 12) {
              return Toast.info('请填写完调研', 1);
            }
            if (!/^1[3|4|5|7|8][0-9]{9}$/.test(phone.trim())) {
              return Toast.info('请填写正确手机号', 1);
            }
            Toast.loading('系统分析中....', 1000000);
            dispatch({
              type: 'discover/patch',
              payload: {
                list: parameter
              }
            })
              .then((res) => {
                const { code, result } = res;
                if (code == 200) {
                  Toast.hide();
                  setTimeout(() => {
                    dispatch({
                      type: 'discover/update',
                      payload: {
                        successModal: true
                      }
                    })
                  }, 0);
                }
              })
          }}

        >提交</div>
      </div>
      <Modal
        popup
        visible={modal}
        onClose={() => {
          dispatch({
            type: 'global/update',
            payload: {
              modal: false
            }
          })
        }}
        animationType="slide-up"
      // afterClose={() => { alert('afterClose'); }}
      >
        <div className={cx('popup-list')}>
          <iframe src="https://privacy.jdponline.cn/privacy.html#section1"></iframe>
          <div className={cx('agree_btn')}
            onClick={() => {
              dispatch({
                type: 'global/update',
                payload: {
                  modal: false
                }
              })
              store('protocol', 1)
              // dispatch({
              //   type: 'discover/update',
              //   payload: {
              //     successModal: true
              //   }
              // })
            }}
          >同 意</div>
        </div>
      </Modal>
      <Modal
        popup
        visible={successModal}
        onClose={() => {
          dispatch({
            type: 'discover/update',
            payload: {
              successModal: false
            }
          })
        }}
        animationType="slide-up"
      // afterClose={() => { alert('afterClose'); }}
      >
        <div className={cx('popup-list', 'top')}>
          <div className={cx('success')}></div>
          <p>我们猜您应该是:</p>
          <img src='https://b.bdstatic.com/searchbox/icms/searchbox/img/wise%E6%A1%86%E4%B8%8Bb.png' />
          <img src='https://b.bdstatic.com/searchbox/icms/searchbox/img/wise%E6%A1%86%E4%B8%8Bb.png' />
        </div>
      </Modal>
    </div>
  );
}

const App = connect(({ loading, global: {
  question,
  modal
}, discover: { successModal, percent } }) => ({
  question,
  loading,
  modal,
  successModal,
  percent
}))(index)
export default App;