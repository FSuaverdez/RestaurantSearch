import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 2vCkTUiUjpLPo3h5Cev9oOLhDRUR1WKgnqt5T1nSJ0zQ__nhoaSQdLhP3TktAHZ6d13eMiStFs0qYRG4PUt32TwGIjzH6GEdLGXS__QYX_riUqHMFmnQhN_icx3_XnYx'
    }
});

