(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".popup_type_edit"),n=document.querySelector(".popup_type_add"),o=document.querySelector(".popup_type_avatar"),r=document.querySelector(".popup_type_photo"),i=(t.querySelectorAll(".popup__input"),t.querySelector(".popup__form"),n.querySelector(".popup__form")),u=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__avatar-button"),s=(t.querySelector(".popup__close"),n.querySelector(".popup__close"),r.querySelector(".popup__close"),i.querySelector(".popup__submit-button"),document.querySelector(".profile__name")),l=document.querySelector(".profile__description"),p=document.querySelector(".profile__image"),f=document.getElementById("name"),h=document.getElementById("description");function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}document.getElementById("place"),document.getElementById("image-link"),r.querySelector(".popup__photo"),r.querySelector(".popup__photo-title"),document.querySelector(".elements");var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objectSelector=t,this._formElement=n,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._buttonElement=n.querySelector(t.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(t.inputSelector))}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidationState",value:function(){this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=function(){function e(t,n,o){var r=t.data,i=t.openPhotoPopup,u=t.handleLikeClick,a=t.handleBasketClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._cardText=r.name,this._cardUrl=r.link,this._userId=o,this._cardId=r._id,this._likes=r.likes,this._isOwner=r.owner._id,this._openPhotoPopup=i,this._handleLikeClick=u,this._handleBasketClick=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(e,t){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._cardText,this._image=this._element.querySelector(".element__image"),this._image.src=this._cardUrl,this._image.alt=this._cardText,this._like=this._element.querySelector(".element__like"),this._remove=this._element.querySelector(".element__basket"),this._userId!==this._isOwner&&this._remove.remove(),this.toggleLike(this._likes),this._setEventListeners(),this._element}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_isLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"toggleLike",value:function(e){this._element.querySelector(".element__like-sum").textContent=e.length,this._likes=e,this._isLike()?this._like.classList.add("element__like_active"):this._like.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._openPhotoPopup(e._cardText,e._cardUrl)})),this._remove.addEventListener("click",(function(){e._handleBasketClick(e._cardId,e)})),this._like.addEventListener("click",(function(){e._handleLikeClick(e._cardId,e._isLike(),e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var b=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){return n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._popupCloseButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=C(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},w.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function O(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(r){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupTitle=t._popupElement.querySelector(".popup__photo-title"),t._popupPhotoLink=t._popupElement.querySelector(".popup__photo"),t}return t=u,(n=[{key:"open",value:function(e,t){w(P(u.prototype),"open",this).call(this),this._popupPhotoLink.src=t,this._popupPhotoLink.alt=e,this._popupTitle.textContent=e}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=B(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},U.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function R(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(o);if(r){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._popupForm=n._popupElement.querySelector(".popup__form"),n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._button=n._popupForm.querySelector(".popup__submit-button"),n._textButton=n._button.textContent,n}return t=u,(n=[{key:"close",value:function(){U(x(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"confirmRemoveCard",value:function(){}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderSaving",value:function(e){this._button.textContent=e?"Cохранение...":this._textButton}},{key:"setEventListeners",value:function(){var e=this;U(x(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var D=function(){function e(t){var n=t.nameElement,o=t.descriptionElement,r=t.avatarElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._description=o,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profile={name:this._name.textContent,about:this._description.textContent},this._profile}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,o=e.avatar,r=e._id;this._name.textContent=t,this._description.textContent=n,this._avatar.src=o,this._id=r}},{key:"getMainUserId",value:function(){return this._id}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var N=function(){function e(t){var n=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._userUrl="".concat(this._baseUrl,"/users/me"),this._cardsUrl="".concat(this._baseUrl,"/cards"),this._likesUrl="".concat(this._baseUrl,"/cards/likes"),this._token=o.authorization}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в getInitialCards: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch(this._userUrl,{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в getUserData: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._userUrl,"/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в changeAvatar: ".concat(e.status))}))}},{key:"saveUserInfo",value:function(e){var t=e.name,n=e.about;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в SaveUserInfo: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в addNewCard: ".concat(e.status))}))}},{key:"likeSumCard",value:function(e){return fetch("".concat(this._likesUrl,"/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в likeSumCard: ".concat(e.status))}))}},{key:"dislikeSumCard",value:function(e){return fetch("".concat(this._likesUrl,"/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в disLikeSumCard: ".concat(e.status))}))}},{key:"removeCards",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка в removeCards: ".concat(e.status))}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=Q(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},M.apply(this,arguments)}function Q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function G(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(o);if(r){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._button=t._popupElement.querySelector(".popup__form"),t._submitButton=t._button.querySelector(".popup__submit-button"),t._textButton=t._submitButton.textContent,t}return t=u,(n=[{key:"submit",value:function(e){this._handleSubmit=e}},{key:"renderSavingQuestion",value:function(e){this._submitButton.textContent=e?"Удаляем...":this._textButton}},{key:"setEventListeners",value:function(){var e=this;M(K(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function X(e,t){te.open(e,t)}function Y(e,t,n){t?le.dislikeSumCard(e).then((function(e){n.toggleLike(e.likes)})).catch((function(e){console.log("Ошибка снятия лайка: "+e)})):le.likeSumCard(e).then((function(e){n.toggleLike(e.likes)})).catch((function(e){console.log("Ошибка установки лайка: "+e)}))}function Z(e,t){ie.submit((function(){return function(e,t){ie.renderSavingQuestion(!0),le.removeCards(e).then((function(){t.removeCard(),ie.close()})).catch((function(e){console.log("Ошибка удаления карточки: "+e)})).finally((function(){ie.renderSavingQuestion(!1)}))}(e,t)})),ie.open()}function $(e,t){return new v({data:e,openPhotoPopup:X,handleLikeClick:Y,handleBasketClick:Z},".elements-template",t).generateCard()}u.addEventListener("click",(function(){var e;oe.open(),e=se.getUserInfo(),f.value=e.name,h.value=e.about,ae.resetValidationState()})),a.addEventListener("click",(function(){ne.open(),ue.resetValidationState()})),c.addEventListener("click",(function(){re.open(),ce.resetValidationState()}));var ee=new b({renderer:function(e,t){ee.addItem($(e,t))}},".elements"),te=new L(".popup_type_photo");te.setEventListeners();var ne=new V(".popup_type_add",(function(e){ne.renderSaving(!0),le.addNewCard(e).then((function(e){ee.addItem($(e,se.getMainUserId())),ne.close()})).catch((function(e){console.log("Ошибка при добавлении новой карточки: "+e)})).finally((function(){ne.renderSaving(!1)}))}));ne.setEventListeners();var oe=new V(".popup_type_edit",(function(e){oe.renderSaving(!0),le.saveUserInfo(e).then((function(e){se.setUserInfo(e),oe.close()})).catch((function(e){console.log("При изменении профиля ошибка: "+e)})).finally((function(){oe.renderSaving(!1)}))}));oe.setEventListeners();var re=new V(".popup_type_avatar",(function(e){re.renderSaving(!0),le.changeAvatar(e).then((function(e){se.setUserInfo(e),re.close()})).catch((function(e){console.log("Ошибка в handlePopupAvatar: "+e)})).finally((function(){re.renderSaving(!1)}))}));re.setEventListeners();var ie=new W(".popup_type_question");ie.setEventListeners();var ue=new y(e,n);ue.enableValidation();var ae=new y(e,t);ae.enableValidation();var ce=new y(e,o);ce.enableValidation();var se=new D({nameElement:s,descriptionElement:l,avatarElement:p}),le=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"e471957f-85d9-4bfd-be28-cfa537c03528","Content-Type":"application/json"}});Promise.all([le.getUserData(),le.getInitialCards()]).then((function(e){se.setUserInfo(e[0]),ee.renderItems(e[1],e[0]._id)})).catch((function(e){console.log("Получили ошибку в catch Promise.All"+e)}))})();