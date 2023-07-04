import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loading from './Fragments/Loading';
import DetailCard from './Fragments/DetailCard';
import FruitsArray from './Fragments/FruitsArray';
import Benefits from './Fragments/Benefits';
import Nutrients from './Fragments/Nutrients';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path:"/Apple",
    element:<DetailCard img={FruitsArray.apple.img} heading={FruitsArray.apple.heading} />,
    children:[
      {
        index:true,
        element:<Benefits description={FruitsArray.apple.description} heading={FruitsArray.apple.heading} list={FruitsArray.apple.benefits} />
      },
      {
        path:"/Apple/nutrients",
        element:<Nutrients nutritionDescription={FruitsArray.apple.nutritionDescription} list={FruitsArray.apple.nutritionList}/>
      }
    ]
  },
  {
    path:"/Cherry",
    element:<DetailCard img={FruitsArray.cherry.img} heading={FruitsArray.cherry.heading} />,
    children:[
      {
        index:true,
        element:<Benefits description={FruitsArray.cherry.description} heading={FruitsArray.cherry .heading} list={FruitsArray.cherry .benefits}/>
      },
      {
        path:"/Cherry/nutrients",
        element:<Nutrients nutritionDescription={FruitsArray.cherry.nutritionDescription} list={FruitsArray.cherry.nutritionList}/>
      }
    ]
  },
  {
    path:"/Mangoes",
    element:<DetailCard img={FruitsArray.mangoes.img} heading={FruitsArray.mangoes.heading} />,
    children:[
      {
        index:true,
        element:<Benefits description={FruitsArray.mangoes.description} heading={FruitsArray.mangoes.heading} list={FruitsArray.mangoes.benefits} />
      },
      {
        path:"/Mangoes/nutrients",
        element:<Nutrients nutritionDescription={FruitsArray.mangoes.nutritionDescription} list={FruitsArray.mangoes.nutritionList}/>
      }
    ]
  },
  {
    path:"/Papaya",
    element:<DetailCard img={FruitsArray.papaya.img} heading={FruitsArray.papaya.heading} />,
    children:[
      {
        index:true,
        element:<Benefits description={FruitsArray.papaya.description}  heading={FruitsArray.papaya.heading} list={FruitsArray.papaya.benefits}/>
      },
      {
        path:"/Papaya/nutrients",
        element:<Nutrients nutritionDescription={FruitsArray.papaya.nutritionDescription} list={FruitsArray.papaya.nutritionList}/>
      }
    ]
  },
  {
    path:"/Pineapple",
    element:<DetailCard img={FruitsArray.pineapple.img} heading={FruitsArray.pineapple.heading} />,
    children:[
      {
        index:true,
        element:<Benefits description={FruitsArray.pineapple.description} heading={FruitsArray.pineapple.heading} list={FruitsArray.pineapple.benefits} />
      },
      {
        path:"/Pineapple/nutrients",
        element:<Nutrients nutritionDescription={FruitsArray.pineapple.nutritionDescription} list={FruitsArray.pineapple.nutritionList}/>
      }
    ]
  },
  {
    path:"/Watermelon",
    element:<DetailCard img={FruitsArray.watermelon.img} heading={FruitsArray.watermelon.heading} />,
    children:[
      {
        index:true,
        element:<Benefits description={FruitsArray.watermelon.description} heading={FruitsArray.watermelon.heading} list={FruitsArray.watermelon.benefits} />
      },
      {
        path:"/Watermelon/nutrients",
        element:<Nutrients nutritionDescription={FruitsArray.watermelon.nutritionDescription} list={FruitsArray.watermelon.nutritionList}/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
