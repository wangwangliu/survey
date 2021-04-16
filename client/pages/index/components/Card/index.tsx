import React, { useEffect, useState } from 'react';
import uniq from 'lodash/uniq';
import without from 'lodash/without';
import { Toast } from 'antd-mobile';

import styles from './index.m.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function noop() { }

interface Props {
  qnrId: number,
  type: number,
  required?: number,
  q: string,
  limit?: number,
  className?: string,
  options: object,
  onClick: Function
}

function index(props: Props) {
  const { qnrId, type, required, limit, q, className, options, onClick = noop } = props;

  const [key, setKey] = useState<any[]>([]);
  const k = Object.keys(options);

  return (
    <div className={cx('card', className)}>
      <div className={cx('header_')}><p><span>*</span>{qnrId}. {q}</p></div>
      {
        !!k.length &&
        k.map((item, index) => {
          return <div className={cx('list_',key.indexOf(item) > -1 ? 'ed' : '')} key={`${item}${index}`} onClick={() => {
            let answer: any = null;
            if (type == 1) {
              answer = [item]
            } else {
              if (!!limit && key.length==limit && key.indexOf(item) === -1) {
                return Toast.info('最多只能选择三个',1)
              }else{
                answer = key.indexOf(item) > -1 ? without(key, item) : uniq([...key, item]);
              }
            }
            setKey(answer);
            onClick({qnrId,type,answer:answer.sort(),content:""});
          }}>
            <div className={cx(type == 1 ? 'radio' : 'checkbox', key.indexOf(item) > -1 ? 'ed' : '')}></div>
            <div className={cx('content')}>{options[item]}</div>
          </div>
        })
      }

    </div>
  );
}
export default index;