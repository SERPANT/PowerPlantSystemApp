import { toast } from 'react-toastify';

function error(message: string) {
  toast.error(message, { hideProgressBar: true });
}

const notificationsUtils = { error };

export default notificationsUtils;
