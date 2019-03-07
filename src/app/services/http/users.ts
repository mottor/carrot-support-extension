import { load } from 'cheerio';
import http from './api';
import { TEMP_ACCESS_URI, USER_INFO_URI } from '../../../config';


interface ITempAccessRequestParams {
  userEmail: string;
  operatorEmail: string;
};
export const getTempAccessLink = async ({ userEmail, operatorEmail }: ITempAccessRequestParams) => {
  try {
    const response = await http.post(TEMP_ACCESS_URI, `frmtmpaccess%5Bclient_email%5D=${userEmail}&frmtmpaccess%5Baccess_length%5D=60&frmtmpaccess%5Baccess_owner%5D=${operatorEmail}`);
    if (response.status === 200 && response.hasOwnProperty('data') && response.data.res == 1) {
      let script = response.data.script;
      const reg = /\{([^\}]*)\}/ui;
      script = JSON.parse(script.match(reg)[0]);
      
      return script.login_link;
    }

    console.log('Ответ сервера', response.data);
    throw new Error('Пришел пустой ответ или запрос не был выполнен');
  } catch (error) {
    throw new Error(error);
  }
};



interface IGetUserDataRequestParams {
  userEmail: string;
};
export const getUserData = async ({ userEmail }: IGetUserDataRequestParams) => {
  try {
    const response = await http.get(`${USER_INFO_URI}${userEmail}`);
    const $ = load(response.data);
    const $table = $('table.general.tr_bordered.mt3');
    const data = $table.find('.myicon-question.invoice_details').data('content');

    if (!data) throw new Error('Нет данных для отображения');

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
