# **Project-modal-react**


## Description

React modal plugin

## Installation

Run the command:
```javascript
npm i new-modal
````
## How to use 

1.import the plugin with:
```javascript
import Modal from "new-modal"
```
2.import useState from react and use the following state:
```javascript
import {useState} from 'react'
const [modal, setModal] = useState(false);
const toggleModal = () => {
  setModal(!modal);
}
```
3.Call the modal where you want to display it:
```javascript
<Modal textModal ="your text" toggleModal={toggleModal}>
```
paste the following code for the css:
```css
.btn-modal {
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
}

.modal-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  z-index: 1;
  box-shadow: 7px 2px 36px 3px rgb(143 255 0 / 75%);
  -webkit-box-shadow: 7px 2px 36px 3px rgb(143 255 0 / 75%);
  -moz-box-shadow: 7px 2px 36px 3px rgba(143, 255, 0, 0.75);
  border: 4px solid #fff550;
  background: #ffffff;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
}
.displayButton {
  display: none;
}


```
