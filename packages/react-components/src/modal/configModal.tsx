import { createRoot } from 'react-dom/client';
import Button from '../button';
import ModalContent from './modalBox';
import { getPrefix } from '../utils/config';

interface Params {
  title: string;
  content: React.ReactNode | string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const configModal = ({ content, cancelText, confirmText, onCancel, onConfirm }: Params) => {
  const prefixCls = getPrefix('modal');
  const container = document.createElement('div');

  const root = createRoot(container);

  const close = () => {
    root.unmount();
    onCancel && onCancel();
  };

  const footer = (
    <div className={`${prefixCls}-footer`}>
      <Button style={{ marginRight: 20 }} onClick={close}>
        {cancelText ?? '取消'}
      </Button>
      <Button
        type="primary"
        onClick={() => {
          onConfirm();
          close();
        }}
      >
        {confirmText ?? '确认'}
      </Button>
    </div>
  );

  root.render(
    <ModalContent open={true} footer={footer} onCancel={close}>
      <div className={`${prefixCls}-confirm-content`}>{content}</div>
    </ModalContent>
  );

  return { close };
};

export default configModal;
