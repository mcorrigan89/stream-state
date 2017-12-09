import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { publishReplay } from 'rxjs/operators/publishReplay';
import { refCount } from 'rxjs/operators/refCount';

export class DataStream<Data> {

  private _data: Data;
  protected _data$: Subject<Data>;

  constructor(initialData?: Data) {
    this._data = initialData;
    this._data$ = new Subject();
    if (initialData) {
      this._data$.next(initialData);
    }
  }

  public get data(): Data {
    return this._data;
  }

  public get data$(): Observable<Data> {
    return this._data$;
  }

  public set data(data: Data) {
    this._data = data;
    this._data$.next(data);
  }

  public unsub() {
    this._data$.unsubscribe();
  }
}
