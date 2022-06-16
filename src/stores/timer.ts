import { defineStore } from "pinia";

export const useTimerStore = defineStore('timer', {
  state: () => {
    return {
      count: 0,
      timerId: 0,
      second: 0,
      limitSecond: 180,
    }
  },
  getters: {
    getCount: (state) => {
      return state.count
    },
    getLimitSecond: (state) => {
      return state.limitSecond
    },
    getLimitMilliSecond: (state) => {
      return state.limitSecond * 100
    }
  },
  actions: {
    startTimer () {
      if (this.timerId === 0) {
        this.timerId = setInterval(() => {
          this.count++;
        }, 10);
      }
    },
    stopTimer () {
      window.clearInterval(this.timerId);
      this.timerId = 0;
    },
    resetTimer () {
      this.count = 0;
    },
    changeLimitSecond(value: number) {
      this.limitSecond = value;
      localStorage.setItem('limitSecond', String(this.limitSecond));
    },
    setLimitSecond(){
      if (localStorage.getItem('limitSecond')) {
        this.limitSecond = Number(localStorage.getItem('limitSecond'));
      }
    }
  }
})