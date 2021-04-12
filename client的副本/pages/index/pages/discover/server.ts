import request from 'client/utils/request';

export function qnrSubmit(prams){
  return request.send(request.api.qnrSubmit,prams )
}