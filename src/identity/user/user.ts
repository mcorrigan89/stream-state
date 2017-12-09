import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class User {

  private _isAuthed: boolean;
  private _isAuthed$: BehaviorSubject<boolean>;

  constructor() {
    this._isAuthed = false;
    this._isAuthed$ = new BehaviorSubject(this._isAuthed);
  }

  public get isAuthed(): boolean {
    return this._isAuthed;
  }

  public get isAuthed$(): BehaviorSubject<boolean> {
    return this._isAuthed$;
  }

  public set isAuthed(authenticatedStatus: boolean) {
    this._isAuthed = authenticatedStatus;
    this._isAuthed$.next(this._isAuthed);
  }

  public unsub() {
    this._isAuthed$.complete();
  }
}