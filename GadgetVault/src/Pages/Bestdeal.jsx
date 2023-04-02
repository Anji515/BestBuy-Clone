import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Heading, Link } from "@chakra-ui/react";
import {Link as Goto } from 'react-router-dom'

const Bestdeal = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Div>
      <div className="bluediv">
        <img
          height="100%"
          src="https://lh3.googleusercontent.com/bOqXm61foIrL0lj4uglz1fpMHfzqcvtgVOcCTayV1QfEvXMCtGR75xjjXcJ_PKufHkDNePW5UkjircOYscYQJXXybx-BobRjHfMoBl9ESg"
          alt=""
        />
        <img
          height="100%"
          src="https://lh3.googleusercontent.com/VuxLFxvYd9RtP2B5RKB02ccGOGcF3FP8npwlLpE-00Hp9T2Qv2wuP5ZEbHoab7r1l5qMAhTbiDH36mTXwF0GOjTgdK75yNZjWbn_jxY"
          alt=""
        />
        <img
          height="100%"
          src="https://lh3.googleusercontent.com/FZrSsQa2ORtok4suRMVCLpammQiTF20_4pv2CaAYMZM7qrYYftuiJByQ5S8W_oGTz35Zg2mzrF8UMRByKg_0QNc_gQvY1QVFoG-eg7xaVg"
          alt=""
        />
      </div>
      <div className="top_deal">
        <div className="red">
          <Heading>Top Deals</Heading>
        </div>
        <div>Today’s featured deals and top tech. Valid through 4/2/23.*</div>
      </div>
      <div className="slider_div">
        <Carousel responsive={responsive} className="SliderTwo">
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/FeaturedDeals_Blue_Solid_Lg_RGB-104799.png;maxHeight=140;maxWidth=140"
              alt="SliderImage"
            />
            <Link>Featured Deals</Link>
          </div>
          <div>
            <Goto to='/electronics'>
            <img
              className="margin"
              src="data:image/jpeg;base64,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"
              alt=""
            />
              Laptops & Computers
              </Goto>
          </div>
          <div>
            <Goto to='/Mobiles'>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWXnfPlVA0IeGVVCA1ZzgG7Ye8O83g49lVw&usqp=CAU"
              alt=""
              />
               Mobiles
              </Goto>
          </div>
          <div>
            <img
              className="margin"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRgWFhYVGBgYGhkZGRkYGRgZGBwkIRwZHRohHBkcIS4lHR8rIRgdJjgmKy8xNTU6HSQ7QDs1Py40NTEBDAwMEA8QHxISHzYrJSs2NDo9NjQ0NDE2NDE3NDQxNDY0MTY0ND80PTQ0NDc0NjQ2NjQ0NjU0NDQ0NDQ0NDY0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBBQcCBv/EAEIQAAIBAgQDBAcFBAoCAwAAAAECAAMRBBIhMQVBUQYiYXETMlKBkaGxBxRCcsFi0eHwIyRDgpKTorLS8TNTFkRU/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEAAgICAgEDAwMFAAAAAAAAAAECEQMhEjFBBFFhEyJxFIGhBTKRscH/2gAMAwEAAhEDEQA/AOzREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAxeLzEQDN4vMRAM3i8xEAzeLzEQDN4vMRAM3i8xEAzeLzEQDN4vMRAM3i8xEAzeLzEQDN4vMRAM3i8xEAzeLzEQDN4vMRAM3iYiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJDijZHI0IVvoZNIcX6j/AJG+hgHIODYKrVopVqYzFpmzHu13toxGxPhLHD+GtULA47Gi2wFZ7n9JBwdXbBoEBYgMDYaAZ2v5zccKwqhNBncnncBZyOc+dLpWYOT5HlezrnUYzH/57QOzr/8A7cf/AJ7Tes7iysToOWgnrNpNnJo0tmhXgDc8bjwOZ9O0hxXAXQXGLx99Gsa7aAkXueR18tCZvGxBTULmPiO6BtudNTbqdD1vNW9YtRd3az1HFrkgkEgDKeguD8ZeL1svE01Th9QXIxmNI0yn072INrtvtbW3iJa4XwOvVzE43FgA20rOT9ekkStmVUCsSRdQRqrMTbUeAuf5t9Nw/CpQpqi7DfxPMyz6LtI0eI7Nuik/fceSAbf07DW2n83lLEcHcUiyYzHGoqhmRqzgjr3dxz+E+uxFJ3OVbWO7a3/ujrfmZrMdhw+Qo2SqgzAWLG1+8um9jylJt8XRDp6RRodm3ZATjceCQCQK7cxIOJ9n6lNM643G6akNXfYb6jYze4HiIqA5O+V0awC6+AZr28Z6xdW6lWV0uNTlDgf4b/SIyTVkKNbPj6eEd7BcXjs3pFDD7w7BVZSUuw0zHwuN56x3DayoWTGYvMASFfEOoNtxf2rX+E3HDXVqlUKAW7ocKrqugLBkRtGuR+H1bRi3GViRewJHdDG45gEi5kuVNEZNTVdGswPDnqrnGKx6i4XvV3BvlUm6EArqSBvcC8vrwBj/APdx/wDnt+6eOFOQroSHs2ZaigqGDWuMpYkEbnzE32GpSG3dIpO1Kl0aWv2dKoW++4+4H/vb3SU9lnyq33zHnS7AV2vyvbx8JsOIcMRindAd23BINgLttvJE4KEvkqVBpaxNx8rStyT6/kukz5LE8PqGqKVHGYxyxBDnEPlVdrsNDcnYeXWWauARXynH48W3vXe5P7I5+c2ycM9EWVXLlrvUJG+hvc7lrXsJcpU1XNnysCFKF8rWvyObVdfMacpH3PzX8kU/B8rUwDnVMVxDQm4NZrkAnVTcA6ZToNLy9w3s/VqswbGY5cqr/bOCSRfMLj1Li2l99xz8Y+uMgKFLvdWy2GQgkGwBIBN9/wB02fC6zBKasLOxLU3c9zne1zmY5FvtuLzSE1JuPsaak+KNBV4dVSoKb4vGgnY+nceXPwtPK4R1qlXxuLyADVMQ5cHndddJv8fglq52GbNSJs2nrWzMPLpfzmsbCelJF2S4DIytYH2u7ubHQ9JWSmpUjnm5R0bH7Paz/fMVT9NXqoipkNV3Y7jWzaA69J0ac0+ziky47Fq17hEBvvuJ0uWTbSs0j0IiJYkSHF+o/wCRvoZNIcX6j/kb6GAcu7PU/wCqUitR1azd3dfXfYTc0MQbWO/WfP8AZ+ky4aiTqjhrHoc7D4GbpBaYquTM1Vl5KhIseWx/SelGY2vb+dZXpPPdRiBddCeZ5Acz4XsJauUqLVbo8VsSutj3Fdid/wACbDrr/tmsamHQqzaMdT3e5qLAG2u/+rSXUQEEEWQKdTa7aEE2B0uPPSad3ZUzAfje6cjYjLpzI7p9xmkmumaOUU+JtuCYWzsxJIXugn6X5kW38RNwFYnQX89JWwOHVKYbTKBfMPxE66e0ST85ISz7goo/DfVvFiPpKFWzCYxr5UzG9wzgAKB+yTrfx/7maFBCguqnmTa+vUHeeamxA00t5TU8Kx/o6jo18hAYNyTXLc9VJsL8tJnKdVfRMckY6Z54iPu9RKqXCMcr6ai511Ya9dek3GIqeN/GSY6gtRGRtmFv3ESjhqbBFVt1GUnrbQfKUinGTS6ZEqvXRr69R1fOLFiVAYL6guFubEFgb28NDbQy4CT64z353s405NsfIj3yzhqRuQOYI3t/O08WI5X8rX+ek1b0isnpFdKoz5Si+ttdlOUnKD3tL3IGhO4m2wrk2VRcDdz6vkvtH5D5TS8Qw5NSk6XVwbG/NbjNodCRe/8A1N/TDra3fXobZ/c2x8j8ZaLtl21JdUWvRC+bmAQPC9r/AEEgrOfVTc6Zvwr4nqfD6SxTqow0NyNxsw813EqY1yB3QCeQJsJedJWRdFXiWPTDoNSzHRRpmdv+95rMHiXZ2Ci73IqgtlUWBsCdx6w2/WSJwsu+d2LP7Q0CjkEB289/nKbYRFckFlRz6IlCbnLYkub6gkkXGoPywi5OSvoqpNtUV8cyU2Q9xkYZciG5Uj1jewvrz5y9haVMqxTPnUL67k0iC2ULlGliCRc9ZBXSkSvcfvC5LOLWQH1TrcX5XvpMNVy4aq2XICaVsq3/ABF+9c3IsNfOWVJuS+SOTU20ScExr99HptTRAQpJBFh6q5bZiVWy36BZsA6JqxBQm4spJBI3HhvcTR0sc9SujoVsPWUrdX7hOtxcGw5bzbMRopsQSe5prsVF+R1E2jJSVplZvkkyHsGAOI40A3GRLHrqNdJ0ec1+ztbY/Fg75E+o5cp0qQaR6EREEiQ4v1H/ACN9DJpDi/Uf8jfQwDnHZFw+CRDrbN/vabWpSsJquxyAYWmeoY/62E3dVtJhJso9FOgmshq5nYgkBQAtwL6i5b3XtpruZZRsoY+B8/cPK/w8ZSq3UN3iAodbdWbTc+8+flNcSpWzTFHVlX0huxNgoIvcG5ANwg8OZ8bX20zw4vUZQQTk/pB7NzfJ/dy3vzOki4ixbuLZmY2Rl11PrEg9CR859FhaQpoFHvPU2tqee1vdEmiZ1FdbMouUa2vqbDRVvuFXYTKuW0mHu0wLLqTYDczN3Zn2MahyMEvci1/PQW6b/wA6ShV4W6IjpZnQWI5OLWYEeI5c/cJJU4/QXRntbqPEW19/0k9DiSP6jA87bH4SZY5JbTRS4y6ZnDoVWwN0IuoJuyfs35jp02kTteSvUJnpaOkxW9IhNshpvqo2Nxr08YGGVruj5DchgRdSQbG6nnpysfOSVECIXPLRR1J2kfB3Ul9bMTmty9k28Lrb3fG1+GXSvTMYvCNUVC4AUP3gL6rkfMTfa9hp8ekuYGqE7gPd3S/snkOoHy08zPiUJRlG5Ft+uh+s0fD2JzZjnVHZSL2YZSQHTn7hr05gzfF6JbrR9G9HMQw7rgWDDe3Q+0vgZphxhCLPdWBZdEcqxViCV0Omm283dCugS+cPaxFiC3he01fp6eRPSKcvfaw2BZ2O4OhF95rJ67JfRHS4ijDKgqN4im/6gS0uEUhCQy5Cza5dSbnUa7G1vISvhuOUjdczEjayMSw8QoNiOfLn5XFriqjWOhFiNNjcWPT6ykWr7LR0fMdoMTlxKIiM7Lb+jGite5uSNrX10lvieLVaTsiBQKiAg275s2a7c9LgG9vjPOLSphc2Vg4buIrXNS50UBvxe/kJrsarU6aU2NyxZm9ljpmW3na35ZlKTim2ZN1bIqOG0R0ujFrkryNzp5DQW20kvF6bo9OqzXRySpGWxBtfMg2JFjy8pU4fxJFBRgxW9x+z4ZuY0njibFqVN7sQt6bZtwQbqbDbQgf3ZCnGULj2ZJ3Fm9+zusHx2LcXsUpkX35bzpU5d9lp/reK/In1E6jOmDuKZ0RdpMRES5YSHF+o/wCRvoZNIcX6j/kb6GCDnfZFf6pR8m/3vNrWPKavskv9To+Tf73m2rMFG4zam3PTX3dfdObbk0WUeTo1uIrPmCpYKozFm5ixFgBY63/XWUq9dfVsQTrlF8w1BJJ+Nz4+Mnq4oEs2xuATpzNlGXTUKNv2pra9U1BnAIZiVW17i9wRpqbCw0m3I6VCkXOF0PS1GJzZEsw5A5s1l06WB8dJvCbaSLhmH9FRVD627Dp0HuFh7pOlEsdP4e8zO7ZjNW/gzTa8+b4/i61QtToUqjZdC2UBSegLkKf+5vcVjkpNkXvP+JuS+Q3JnyvFOIszkN3ra3bYe7YTrw42nfk5ckkl8Gpp9meIsGLI9MDW7ZSp/wAJPz6yrVwGIpsneUW7xZQXAIBFiF74PLUW312l/E49yhRKjpfkruot4gEaHpKvAcRTesqVkYgEFg1yGFwDqT3gQJfJ9RXKTpV0Th+jJqMY22+7PreznEM9JTVdQ40bkT0Ntbfwn1FEK2xB8pq8Z2cw1Y60go5BHdfobSOn2QoJqj4lPy1W/UGcSePxZvwraRucRhc3S4Byg7AkEXPx+ZmswnDSqCxIdHcqx5jOwIYc1YW+RlnB4VqR/wDPWcey5Qj4hA3zlnOTM5SjYjBPZG+DRtSuvOxMhocIpD2vj4m/1l0CRumbS5A523PvleavomWPyR4LB0wXSk730LM3eCnYBSLbWvaS4DuIyN3/AEZy5gt2I3FwNzYyPGYsUgtNAA7XOn4VG7HxvoPE+E0eG4o9N3FyTn7q2N2U2LEHwJJ95miyRS0U0tG7apSq3ylSR4AMp8jqJXVwCyDKpygsVGgP4TY7czaVsfh1RXeiR6R9h6zMTyXXu35kTUMXwwYkl6l1eodSDfdTzy5dPC4MyeVrv/IV3s94/izU2NV0GZE/o0sQGFrFh0BI1100HO8pcUq1fQ0GrIubVrKCuhNxbxW418JvnoUq4R/WRmXW9yMpuFJ5Wvy/Uyt2ry1awQOqhBkuQxzG/esFGttBMpyfF77KSjpnzGIpd0ldczAG3I3A25TcHB5qdambgDvq9iSMm4tzupMzSwaIyAI9Q3F2Y5EW3PLfM3y3myQFagd2AGbQdRe23IWMti+3TKxhvopfZWP61itQ3cSxGoOosROqTm/YCmq8RxqpbIFXLbbUg6fGdIndHpF0q0IiJYkSHF+o/wCRvoZNIcX6j/kb6GAc97JW+50Lm2jf73kmMYeuTYE2VSPWP7X7C6t4n3TW9nnJwdEBhezcrhBncsT+0dPcfjivX7xVixJuT3bkA5edgqjTW+um045SqTO7Fj+1P3JXsVAWxCDMWJCi50uTvfXfzk3ZvDpVrA2uKSkjoCxGXfmdT7rzV4hr5st8osQtuZzAG29ydh4jxM+47P4IUKKppmN2cjqeXiALKPAS0XZOX7Ueq+Gsbiari/Flw6G2rWvbp00+c3mOxCU0Z3ZVVQSWbYTkuN4kKqK9ioZnsGF2IDEA2ayqTvrtNsMUpN+xxZ39qivJWfirsWYZyzE3OoufAn9JhHdjc/iJBAsempM81BzvY+B+pPrfADwMrq9V2CIoqMeQXve87D36TueRRXJnncHN8VstU6SrlY3Y3B+YFh8R8Jt+B0PSuCFAXS56Xv8Awmqo8DqMR6XKnVFfMw8LjQe4mffcIwioqqqhUXVR1PMnrrPN9V66Mk8cXbZ6vo/6fLE1lyKktr3ZuqRtJc0jwyX3llksJyxlo3qyrudZMiys7WMso+kopkKNHpyAJSr4lUUudhPeJqcp87xZ2d0pLuTc/p8BczOeRropN0ibhzly9Z92Nh4Ach/PKaSvVZ8SguRm3A2t0PuFp9DistNUoruRc9bDcnzJ+s0/DqGbE1H5IlveSq/QtNVqKRzU+jeYd0dnRk7tMIM6tlexFweVwNdNZq8RgmKs1InMjhwSPWFipB8CNLGXHOXE1EuQGpLqOvn75qBwysjB2rtlIuq3Pe30b+ecicttI08dWX+C4OojvZU9G+4BICsL5So99ra/KesTw92ckFyLkaAAjqGtoN/fe8mXHNkXKLe02llXe/mdvORVFSoFU20/CWIzLryGoIt/NjKS4uKRaMVxMMiUSbnO4W9t1Xfc8zpsJ54bxBcQrlkyulizXvmGtwPZ2k9PC0jTd1LVAgsbmzW5C9tQLnUfpK9bTCsVRUZxmyLuEJsCTzJ/WSpcd+ClPkSfZ2B9/wAZbYoh+JB/WdKnMPszv99xV98iX+InT56kHcU/gq+xERLASHF+o/5G+hk0hxfqP+RvoZJByrs9QzYRGTvMoa6gHu99rkAevv8ApKWLFz3hbXMBbvE9XbkfC+lhLPZmlUNGkVNrK3eOiKM7fEnoBeb2pUogmoipUqbga94ga5RtfTeedOVSd+56MZcYq/ZGv4Fw6o7h2ByKTlFyFY8rX9YDrrr77/VrUSl67qp3t+8nafDYjjWNq5iq+jQ8z3Sfyjc/GT8L7NvUIes7665R3SfMyFNKVLsiXFu5M+ix/G8E4yOFqKDezWK3Gmxte3Wc/wC2KCq6LhsuV9VTKFVB+I2Gy6XufnPuxwfDUhpSQsdBnGck/wB6+kj4fwalSuxAd29ZiBb8qrsqjpNVlUU3J2/C/wCmElcko6V7fx7Hw/DOzak6upAtYF7ZtNSANBL+HxdOk/owQh2uQQP8QE+tPDcO9y1JNdiBlNvNbGaXiXZnvZqTn8rm/uDjUe+85pLmtts78eaMHqKX7E+Aw9N7vfMwNiLggH3b+c3dJhNRw3i9NCKdRQrW1RgoA62I+Rm5+7K/epN/dJHyP75T6XFfaU9TklN3ujY4QaSaobKZSoOV0IsRyMVq+lpZSqNHPZXrz2HsJE7yFqwmLeyGyWu01uDo2d6jbkkL4Ac/lJXr6zyzZgQdiLSGzNq3ZT4Phy+fEPu5OTwUH/r4T3w1FFNnt3qhLHyucvy+stK+VSo0GUqB00sJVZwi5m9VbAAbnkAPEyynSSIUaGPqZqhfYOpHkoNyf8PzIkaVjUw5Yi2RrjlpmO3x+UqY+k/rvYM+ioDfKo1tfr185NnHoCoJBWyjxsGJ+sjk23ZCdWvglw7rYX1Vrg+fMeHI+8SXhq/1lidlC5R4TXYJiyMnMjMvgy/zb3S7wzE94K/dva9xYjnt5GFJWmykJUbQ0cgqFV7jU6i2B1v+EZbePXn4zX4R0RVR8wGUhiup1YsL9AL/ACl2vXZldgND6ouNQCATbwuPjbpIKWJDpkempcaKw2I6huf83tJkm1o6Wl2ir9mgtjcWL3sia9dROnTmn2ci2PxnTIn1E6XPYxf2L8I5H2IiJqBIcX6j/kb6GS5pDij3H/K30Mgg5LwQO+ESiwKo6t6OouoBzPcOBsL8zpIcPh6lADNmzI3eOVggJNwA2zfxmk4X2mq4emKaUk0JJZg5Y6k6DNZd+UnxXbHEVECvSQ2G9m+YvY++efm9NKd/k6HOLjVn2lHBJXf0rEm6iyX08/PwlzDYuoh9HkLuASpzLdl5E67jYzm6dpqwQp6NbEEfiuL9NZRpcaxCG5LG219Le+95RelyLa0/9kRnFLfZ1b0jli7pa2g3OXrtzktCsj6BxvqOg579ZzTDdrsSi2AJbk9/HbKNJa/+d4o+vTpv5qflrpJl6XJdo0+pD3OmVcv4dpXac5xHbWs4t93RfFS4+WaVT2prXJyWv0L/AL5RYc/lL9mac8LXbv8AB0irw6nUGZ0ViveGZbgHQX1Fr2MpUcK9N70WyjmhJyHy9k+4jwnyGG7cV0BAoqb6HMXPIj2vGE7dVx/YJ/r/AOU0eDJSoo80U9M6bhMej9yoMrgbNobdQdj7pBjsOy94d5OvTzHKc7rdu67ixw9PTYjOGHiDmuDLOB+0DEqtilE2sO/mF9D42P8AHpLvBKS2ijyR7R9JXxetpGr3ny1btA7tny4ZLi5QGoQDpty59eRtyvVHa6sP7FPPvf8AKYfpMl9FecT7FjrLNN9NZ8E3ausdfRJ8G/fMjtbW/wDWvwb/AJQvS5PYc4n2lWqBryEtcPwpY+kcaj1E5J4nq568thPgh2trX/8ACmng3/KWV7c4gf2Kf6/+UfpMl9EqcfJ9LxJ89Y22Xujz5/P6SAZUZFbYq5b3mw93dny6dqqwN/RJfU/i367zw/aaqWzeiTYKBZrADbnH6TJ7GTats+jwDZHsfwsPgbg/rLPGq6KyqqkuxvfdmubBRPjz2kqZy3o0u3LXrfTvfzeXaXbCqrip93pl1UqCQ2l/70L0uSmmisaWmfe4PDmxWpq7hQw5Io1VBbqdT1uZ7xORxkUXJOQGwsCfWPgAL/CfA0e2WIW/9EhLG5Jz3P8AqlbEdqMSwChQqDdVBs3mb3900Xp5pdGrmj7n7PQo4hjQrBlCoAw2OonSZyf7InLYjEsQRdE8vWnV8074KopGJmJi8SwPBMwWmTPLQSeSR4TwXEw6+MhZIIJC4nI+33FKnEsRTwOGUmkr3Zx6rstwSDzRbnXa9+gn0/b3iGLSmKWFoVqj1bguiMyoNjdhoCfG0rdiOy9TDJnfSq47xOpUeyvQbfAQCDivZqpg6VN8MzP6FBnS3e01zoRrp01n0nZXtPTxlO4Kh00ddL+dpaqcOL+sxPhyihw3J6pC+SgQDZ+kHhMekHhKn3V/bPwmPuze2YBc9IPCPSDwlP7s3tmZ+7N7ZgFr0g8Jh2U6EKfMAyt92b2z8Jj7s3tn4QCcKg/CnwEl9IPCU/uze2fhH3ZvbPwgFz0g8Jn0g8JS+7N7Z+Efdn9s/CAXfSDwmfSDwlL7q/tn4R91f2z8IBcasoBJsANSTawnPeKcaqcRr/d8L6iHvOR3F5Fn6+C/xt9o2DY7uZCnCQputgeoFvpAOedveyb4cUsZhnZno5c7aZgVNw9gLWvy8Z0Dsn2hXG0FcrkqAAVEIsVa246qdwf3Sy+FcqVJDAgghhcEHcGczq8KxvC8WKuGoVq1BzZkRWewJuVstz4g2384B2EOJ7UjwlPDHOqtZlzAHKwKsLjZgdjLKp4wCZTPc8KJ6EEmYiwiAeDPJE95TGUwCIiYKyXL4Rk8IBDlmMsmyR6OCCDJGST5DGQ9IBBkjJJsh6RkPSAQ5IySbIekZD0gEOSMkmyHpGQ9IBDkjJJsh6TOQwCHLGWTZDHozAIcsZZNkMzl84BDljLJsnhGTwgEWWZCyTL4TOUwSeMszaespjLAPNp6EzaLQDMTFpmASREQQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgH/2Q=="
              alt=""
            />
            <Link>TVs & Projectors</Link>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77752_cellphone_navicon-c51ec671-b862-4bdf-9f05-700347787d4f.jpg;maxHeight=140;maxWidth=140"
              alt=""
            />
            <Link>Totaltech Member Deals</Link>
          </div>
        </Carousel>
      </div>
      <br />
      <Heading as="h4" size="md" className="today">
        Today's featured deals
      </Heading>
      <br />
      <hr />
      <div>
        <img
          src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-666038_xlarge-5d02310e-bb97-4a44-8d3c-4557e2b4c223.jpg"
          alt=""
        />
      </div>
      <div className="basket">
        <div className="blue">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-81667-cbw-gi-easter-prod-230320-bed42cb3-832a-4060-b296-b24d7f03248d.png;maxHeight=120;maxWidth=120"
            alt=""
          />
          <div className="blue_in">
            <br />
            <Heading>Baskets Filled</Heading>
            <p>Easter is April 9.</p>
            <Button className="btn_blue">Shop Easter Gifts</Button>
          </div>
        </div>
        {/* <div className='red1'>
                    <div>
                        Outlet Deals
                    </div>
                    <Heading>Save up to</Heading>
                </div> */}
        <div className="white_div new8">
          <div className="new1">
            <p>Outlet Deals</p>
            <p as="h3" size="lg">
              <span className="percent">Save up to</span>
            </p>
            <p>
              <Heading as="h2" size="3xl">
                50<span className="percent">%</span>
              </Heading>{" "}
              on clearance and open-box items.
            </p>
            <Button className="btn_shop">Shop Best Buy Outlet</Button>
            <p>
              Ends 4/16/23. Online and in store. Minimum savings is 5%.
              Exclusions apply.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom_div">
        <div className="bottom">
          <img
            width="100%"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37400-pol-dotd-190823_der-98962.png;maxHeight=280;maxWidth=412"
            alt=""
          />
          <p className="new2" as="h5" size="sm">
            Deal of the Day
          </p>
        </div>
        <div className="bottom">
          <img
            width="100%"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37504-pol-outlet-190823-98410.png;maxHeight=280;maxWidth=412"
            alt=""
          />
          <p className="new2" as="h5" size="sm">
            Clearance, open-box and more.
          </p>
          <p>
            Save when you shop the Best Buy Outlet for clearance, open-box,
            refurbished and pre-owned items.
          </p>
        </div>
        <div className="bottom">
          <img
            width="90%"
            src="https://tpc.googlesyndication.com/simgad/10932686042118341431?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkWl43qsxaQmIAPef9v0EQXNNXy0w"
            alt=""
          />
        </div>
      </div>
      <br />
      <div className="last">
        <div className="last1">
          <div className="last1_div">
            <img
              width="50%"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_XVzyANTFfzHvU9bRO-_BDjOoKGIaQ04AA&usqp=CAU"
              alt=""
            />
            <div className="new3">
              <Heading>12 month financing</Heading>
              <br />
              <p>on storewide purchases $299 and up.</p>
              <br />
              <Button className="new4">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="last2">
          <br />
          <br />
          <br />
          <Heading as="h2" size="xl">
            Interested in a no
          </Heading>
          <Heading as="h2" size="xl">
            credit needed*
          </Heading>
          <Heading as="h2" size="xl">
            See disclosure option?
          </Heading>
          <br />
          <Button className="new5">Learn More</Button>
        </div>
      </div>
    </Div>
  );
};

export default Bestdeal;

const Div = styled.div`

    width:100%;
    border:1px solid ;
   .new1{
   margin:auto;
   align-items:center;
   margin-top:20px
   }
   
   .new5{
    color:black
   }
   .last1_div{
    height:300px;
    width:80%;
    border:1px solid rgb(0,70,191);
    margin:auto;
    display:flex
   }
   .new3{
   margin-top:60px;
   color:white
   }
   .last2 *{
    margin-left:20px;
   
   }
   .new4{
    color:black
   }
   .last{
    height:300px;
    width:100%;
    border:1px solid white;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:1px;
    
   }
   .last1{
    width:900px;
    height:100%;
    border:1px solid white;
    background-color:rgb(0,70,191);
  
   }
   .last2{
   
    height:100%;
    border:1px solid white;
    background-color:rgb(65,106,222);
    color:white;
    text-align:justify;
   
   }
   .new2{
    color:blue
   }
    .bluediv{
        height:150px;
        width:100%;
        border:1px solid white;
        background-color:rgb(0,70,191);
        display:flex;
         justify-content:center
    }
    .bottom{
        height:80%;
        width:400px;
        border:1px solid white;
       margin-top:30px;
       margin-left:20px;
       text-align:justify;
      
    }
    .white_div{
        justify-content:center
        text-align:justify;
       
    }
    .btn_shop{
        background-color:blue;
        color:white
    }
    .percent{
        color:red
    }
    .top_deal{
        height:50px;
        width:100%;
        border:1px solid white;
        display:flex;
        align-items:center;
       
    }
    .div50%{
        display:flex
    }
    .red{
        height:100%;
        width:200px;
        background-color:red;
        align-items:center;
        color:white
    }
    .top_deal div{
        margin-left:20px
    }
    .slider_div{
        height:300px;
        width:100%;
        border:1px solid black;
        align-items:center
    }
    .SliderTwo{
        /* border: 1px solid black; */
        padding-top: 50px;
        padding-bottom: 50px;
       
        
    }
    .SliderTwo img{
        width: auto;
        height: 140px;
        margin-left:70px
    }
    .SliderTwo div{
        border:1px solid white;
        width:300px;
        height:120%;
       text-align:center;
       align-items:center;
       margin:auto;
       
    }
    .margin{
        margin-right:30px
    }
    .today{
        margin-left:0px
    }
    .basket{
        height:300px;
        width:100%;
        border:1px solid white;
        display:flex;
        justify-content:space-evenly
    }
    .new8{
        height:100%;
        width:48%;
        border:1px solid white;
    }
    .blue{
        background-color:blue;
        display:flex;
        height:300px;
        width:700px;
        border:1px solid blue;
        align-items:center;
        justify-content: center;
        color:white;
    }
    .blue_in{
        align-items:center;
        
        
    }
   
    .white{
        background-color:white
    }
    .img1{
        height:500px;
        width:100%;
        background-image: url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/custom_fluid_lg_mmt-666079-60b989c9-968b-4114-b8cf-3b96f84319c8.jpg");
       
    }
    .img1_div{
        height:400px;
        width:500px;
        border:1px solid white;
        margin-right:0px 
    }
    .btn_blue{
        background-color:blue;
        border:1px solid white;
    }
    .white_in{
        height:200px;
        width:200px;
        border:1px solid white;
    }
    .red1{
        border-color:red
    }
    .bottom_div{
        height:400px;
        width:100%;
        border:1px solid gray;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap:5px
    }
`;
