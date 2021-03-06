export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._userUrl = `${this._baseUrl}/users/me`;
        this._cardsUrl = `${this._baseUrl}/cards`;
        this._likesUrl = `${this._baseUrl}/cards/likes`;
        this._token = headers['authorization'];
    }

    getInitialCards() {
        return fetch(this._cardsUrl, {
            headers: {
                authorization: this._token,
            }
        })
        .then(res => {
            if(res.ok) {
                const infa = res.json();  
                return infa;
            }
            return Promise.reject(`Ошибка в getInitialCards: ${res.status}`);
        })
    }

    getUserData() {
        return fetch(this._userUrl, {
            headers: {
                authorization: this._token,
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка в getUserData: ${res.status}`);
        })
    }

    changeAvatar(src) {
        return fetch(`${this._userUrl}/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: src.link
            })
            })
            .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка в changeAvatar: ${res.status}`);
            })
    }

    saveUserInfo({
        name,
        about
        }) {
        return fetch(this._userUrl, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка в SaveUserInfo: ${res.status}`);
        })
    }

    addNewCard({
        name,
         link
    }) {
         return fetch(this._cardsUrl, {
             method: 'POST',
             headers: {
                 authorization: this._token,
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 name: name,
                 link: link,
             })
           })
           .then(res => {
               if (res.ok) {
                   return res.json();
               }
               return Promise.reject(`Ошибка в addNewCard: ${res.status}`);
           })
    }

    likeSumCard(cardId) {
        return fetch(`${this._likesUrl}/${cardId}`, {
            method: 'PUT',
            headers: {
              authorization: this._token,
            }
          })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка в likeSumCard: ${res.status}`);
        })
    }

    dislikeSumCard(cardId) {
        return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {authorization: this._token,} 
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(`Ошибка в disLikeSumCard: ${res.status}`);
        })    
    }

    removeCards(cardId){
        return fetch(`${this._cardsUrl}/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка в removeCards: ${res.status}`);
        })
    }
}