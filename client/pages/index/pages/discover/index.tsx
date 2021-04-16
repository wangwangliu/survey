import React, { useState, useEffect } from 'react';
import dva, { connect } from 'dva';
import { Toast, Modal, Progress } from 'antd-mobile';
import Card from 'client/pages/index/components/Card/index';
import Header from 'client/components/Header';
import styles from './index.m.scss';
import get from 'lodash/get';
import remove from 'lodash/remove';
import img from 'client/pages/index/images/top.jpg';
import img2 from 'client/pages/index/images/log.png';
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
  const [img_, setImg] = useState<any[]>([])
  const [policy,setPolicyModal] = useState(false);
  const [isCheck,setCheck] =  useState(false);
  // const [modal, setModal] = useState(false);

  useEffect(() => {
    // setModal(true)
    // setPolicyModal())
    dispatch({
      type: 'global/update',
      payload: {
        modal: true
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
              if (get(item, 'type') == 2 && !get(item, 'answer').length) {
                dispatch({
                  type: 'discover/update',
                  payload: {
                    percent: ((parameter.length) / (question.length)) * 100
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
                  percent: ((parameter.length) / (question.length)) * 100
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
              if (value == '') {
                // dispatch({
                //   type: 'discover/update',
                //   payload: {
                //     percent: ((parameter.length) / (question.length + 1)) * 100
                //   }
                // })
                // setParam(parameter);
                return
              }
              parameter.push({ "qnrId": 12, "type": 3, "answer": [], "content": value });
            //   setParam(parameter);
            //   dispatch({
            //     type: 'discover/update',
            //     payload: {
            //       percent: ((parameter.length) / (question.length + 1)) * 100
            //     }
            //   })
            }} placeholder="请输入手机号" type="tel" />
        </div>
      </div>

      <div className={cx('btn_wrap')}>
        <div className={cx('btn_', param.length == 11 ? '' : 'disb_')}
          onClick={() => {
            if (param.length != 11) {
              return Toast.info('请填写完调研', 1);
            }
            if (!!phone.trim()&&(!/^1[3|4|5|7|8][0-9]{9}$/.test(phone.trim()))) {
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
                    setImg(result);
                  }, 0);
                }
              })
          }}

        >提交</div>
      </div>
      <Modal
        popup
        visible={modal}
        // visible={false}
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
        <div className={cx('popup-list','f')}>
        <div className={cx('iiframe','fff')}>
            <div className={cx('_logo')}></div>
            <div className={cx('advertising')}>
            <img src={img2} />
            </div>
        </div>
          <div className={cx('protocol')}>
              <div className={cx('r',isCheck?'ed':'')} 
                onClick={()=>{
                    setCheck(!isCheck)
                }}
              />
              <div className={cx('rp1')}>
                 <span className={cx('rpp1')}
                    onClick={()=>{
                        setCheck(!isCheck)
                    }} 
                 >请认真阅读并同意</span> <span  className={cx('rpp2')}
                 onClick={()=>{
                     console.log(111);
                    dispatch({
                        type: 'global/update',
                        payload: {
                            policy: true
                        }
                      })
                    // setPolicyModal(true)
                }}
                 >《隐私条款》</span>
              </div>
          </div>
          <div className={cx('agree_btn')}
            onClick={() => {
                if(!isCheck){
                    return Toast.info('请勾选同意隐私条款',1)
                }
              dispatch({
                type: 'global/update',
                payload: {
                  modal: false
                }
              })
              // store('_protocol_', 1)
              // dispatch({
              //   type: 'discover/update',
              //   payload: {
              //     successModal: true
              //   }
              // })
            }}
          >开始答题</div>
          <div className={cx('placeholder')}></div>
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
          <p>长按图片即可保存，快把你的人设分享到朋友圈吧~</p>
          {
            !!img_.length &&
            img_.map((item, index) => {
              return <img key={index} src={`http://h5-research.devops-jdp.com/research${item}`} />
            })
          }
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