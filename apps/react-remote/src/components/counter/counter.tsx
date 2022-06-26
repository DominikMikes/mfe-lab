import styles from './counter.module.css';
import { Observable } from 'windowed-observable';

/* eslint-disable-next-line */
export interface CounterProps {}

const counterObs = new Observable('counter');
const decreaseCounter: any = () => {
  counterObs.publish('minus');
}

export function Counter(props: CounterProps) {
  return (
    <div className={styles['container']}>
      <button onClick={decreaseCounter}>Decrease counter</button>
    </div>
  );
}

export default Counter;
