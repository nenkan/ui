import { FloatingNotice } from "..";
import '@nenkan/css/floating-notice.scss';

export default {
  title: 'FloatingNotice',
  component: FloatingNotice
};

export const FloatingNoticeExample = () => <FloatingNotice danger>Message</FloatingNotice>
