import { Message } from 'primeng/api';

export type MCNoti = Message & {
  position?: string;
};

export class MNoti {
  private defaultData: MCNoti = {
    severity: 'info',
    summary: '',
    detail: '',
    key: 'tr',
    position: 'top-right',
    life: 3000,
  };
  private data: MCNoti = Object.assign({}, this.defaultData);

  getNoti() {
    return this.data;
  }

  updateNoti(data: any) {
    this.data = Object.assign({}, this.data, data);
  }

  updatePosition(position: any) {
    this.data = Object.assign({}, this.data, position);
  }
}
