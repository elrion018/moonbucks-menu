export default class Store {
  state = {};
  subscribers = [];
  reducer;

  constructor(reducer) {
    this.reducer = reducer;
  }

  // 자신을 구독하는 컴포넌트를 등록하는 메서드
  registerSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  // state 변경사항을 알리는 메소드
  notifyChanges() {
    this.subscribers.forEach((subscriber) => {
      subscriber.setState(this.state);
    });
  }

  // action을 받아 상태변경을 리듀서에 요청하는 메소드
  dispatch(action) {
    this.state = this.reducer.reduce(this.state, action);
  }

  // state getter 메소드
  getState() {
    return { ...this.state };
  }

  // data setter 메소드
  setState(state) {
    this.state = state;
  }
}
