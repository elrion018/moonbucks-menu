export default class Store {
  data = {};
  subscribers = [];

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

  // 상태변경을 리듀서에 요청하는 메소드
  dispatch() {}

  // data getter 메소드
  getData() {
    return { ...this.data };
  }

  // data setter 메소드
  setData(data) {
    this.data = data;
  }
}
