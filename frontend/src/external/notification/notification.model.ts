import { Message } from 'primeng/api';

export type MCNoti = Message & {
  position?: string;
};

export class MNoti {
  private defaultData: MCNoti = {
    severity: 'info',
    summary: '',
    detail: '',
    key: 'tl',
    position: 'top-left',
    life: 3000,
  };
  private data: MCNoti = Object.assign({}, this.defaultData);

  // Return the Model's data
  getNoti() {
    return this.data;
  }

  /**
   * Updates the current data with input
   * @param {data} data Takes MCNoti
   */
  updateNoti(data: any) {
    this.data = Object.assign({}, this.data, data);
  }
}
