export default class Store {
  data = {};
  subscribers = [];

  constructor() {}

  // 자신을 구독하는 컴포넌트를 등록하는 메서드
  registerSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  // data의 변경사항을 알리는 메소드
  notifyChanges() {
    this.subscribers.forEach((subscriber) => {
      subscriber.setState(this.data);
    });
  }

  // data getter 메소드
  getData() {
    return { ...this.data };
  }

  // data setter 메소드
  setData(data) {
    this.data = data;
  }
}
