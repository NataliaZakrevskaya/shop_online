import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'refrigerator'},
      {id: 2, name: 'smartphone'}
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Iphone'}
    ]
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/GEOiPhone12Procolorlineup5up.png'
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/GEOiPhone12Procolorlineup5up.png'
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/GEOiPhone12Procolorlineup5up.png'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/GEOiPhone12Procolorlineup5up.png'
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/GEOiPhone12Procolorlineup5up.png'
      }
    ]
    makeAutoObservable(this)
  }
  
  setTypes(types) {
    this._types = types
  }
  
  setBrands(brands) {
    this._brands = brands
  }
  
  setDevices(devices) {
    this._devices = devices
  }
  
  get types() {
    return this._types
  }
  
  get brands() {
    return this._brands
  }
  
  get devices() {
    return this._devices
  }
}