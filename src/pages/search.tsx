import { SideBar, TopBar } from "@/core/components";
import { FormEvent, MouseEventHandler, useState } from "react";
import styles from "src/styles/search.module.css";

export default function Profile() {
  let placeholder: any[] = [];
  const [results, setResults] = useState(placeholder);
  let htmlResults = [];

  const handleQuery = (e: FormEvent<HTMLInputElement>) => {
    // TODO: make the API call to get the search results
    const query = e.currentTarget.value.toLowerCase();
    const users = [
      {
        name: "A super duper long name",
        major: "Some major that has a really long name you idiot",
        rating: 2.5
      }, {
        name: "Kamala Harris",
        major: "Computer Science",
        rating: 2.2
      }, {
        name: "Obamna",
        major: "Computing Security",
        rating: 3.8
      },
    ];
    let newUsers = [];
    if (query.length > 0) {
      for (let user of users) {
        if (user.name.toLowerCase().includes(query) || user.major.toLowerCase().includes(query)) {
          newUsers.push(user);
        }
      }
    }
    setResults(newUsers);
  }

  const redirectToProfile = (event: any, user: any) => {
    console.log(user);
  }

  for (let index in results) {
    const result = results[index];
    const rating = result.rating.toFixed(1).split(".");

    let stars = [];
    for (let i = 1; i <= 5; i++) {
      const star = {
        filled: <svg key={`${i}-filled`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M35.9231 14.1639C35.7177 13.5237 35.1354 13.0927 34.4726 13.0927H22.9971L19.4522 1.9836V1.98147C19.2447 1.3413 18.6624 0.910217 17.9995 0.910217C17.3388 0.910217 16.7544 1.3413 16.549 1.98362L13.0019 13.0927H1.52652C0.863711 13.0927 0.281341 13.5237 0.0759367 14.1639C-0.129468 14.8041 0.0907491 15.5024 0.628644 15.9012L9.91444 22.7683L6.3674 33.8795C6.162 34.5219 6.38859 35.2202 6.92647 35.6147C7.19328 35.8108 7.5067 35.9102 7.82008 35.9102C8.13351 35.9102 8.44693 35.8108 8.71586 35.6125L17.9995 28.7475L27.2811 35.6125C27.8168 36.0091 28.539 36.0091 29.0747 35.6147C29.6126 35.2202 29.8371 34.5219 29.6317 33.8774L26.0846 22.7683L35.3726 15.9012C35.9083 15.5024 36.1307 14.8041 35.9231 14.1639" fill="#CFD2CD" />
        </svg>,
        half: <svg key={`${i}-half`} width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.9551 13.2992C35.8302 12.9136 35.4794 12.6386 35.065 12.6386H22.7083L18.8895 0.659297C18.7646 0.273646 18.4138 0 18.0006 0C17.897 0 17.7971 0.0178189 17.7035 0.0496382L17.7097 0.0470925C17.4276 0.146369 17.2116 0.372923 17.1255 0.658024L17.1243 0.664388L17.1093 0.659297L13.2904 12.6386H0.935049C0.418213 12.6386 0 13.0663 0 13.5932C0 13.9089 0.151056 14.1902 0.383258 14.3632L0.385754 14.3645L10.3817 21.7695L6.56282 33.7489C6.53411 33.8367 6.51663 33.9385 6.51663 34.0441C6.51663 34.5711 6.93609 34.9987 7.45293 34.9987C7.65891 34.9987 7.84991 34.9313 8.00472 34.8154L8.00222 34.8167L17.9994 27.4104L27.994 34.8167C28.1463 34.9313 28.3373 35 28.5446 35C29.0614 35 29.4809 34.5723 29.4809 34.0454C29.4809 33.9398 29.4634 33.8367 29.4322 33.7412L29.4347 33.7476L25.6158 21.7682L35.6155 14.3632C35.8502 14.1876 36 13.9089 36 13.5932C36 13.4876 35.9825 13.3858 35.9526 13.2903L35.9551 13.2967V13.2992ZM23.9655 20.6329C23.7308 20.8086 23.5797 21.0886 23.5797 21.4055C23.5797 21.5111 23.5972 21.613 23.6284 21.7084L23.6259 21.7021L26.7644 31.5482L18.5487 25.4606C18.4039 25.3587 18.2253 25.2976 18.0318 25.2976C18.0206 25.2976 18.0094 25.2976 17.9969 25.2976L17.9981 4.04106L21.1366 13.8885C21.2614 14.2742 21.6122 14.5491 22.0267 14.5491H32.1824L23.9655 20.6329Z" fill="#CFD2CD" />
        </svg>,
        empty: <svg key={`${i}-empty`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M24.4911 21.2813C23.9575 21.6779 23.7351 22.3741 23.9384 23.0185L27.0535 32.7784L18.8962 26.7453C18.3584 26.3487 17.6384 26.3487 17.1026 26.7453L8.94533 32.7784L12.0625 23.0142C12.2658 22.3741 12.0435 21.6779 11.5077 21.2813L3.34835 15.2482H13.4327C14.0955 15.2482 14.68 14.815 14.8833 14.1748L18.0005 4.41281L21.1156 14.1726C21.2141 14.4853 21.4078 14.7579 21.6685 14.9513C21.9292 15.1446 22.2436 15.2486 22.5662 15.2482H32.6526L24.4911 21.2813ZM35.9244 14.1662C35.719 13.5238 35.1366 13.0928 34.4738 13.0928H22.996L19.4511 1.98361C19.2457 1.34132 18.6633 0.910217 18.0005 0.910217C17.3376 0.910217 16.7532 1.3413 16.5499 1.98363L13.0028 13.0928H1.52505C0.862212 13.0928 0.279851 13.5238 0.0744238 14.1662C-0.128866 14.8085 0.0934927 15.5047 0.62926 15.9013L9.91522 22.7664L6.366 33.8776C6.16271 34.52 6.38507 35.2162 6.92296 35.6128C7.18977 35.8111 7.50532 35.9102 7.81661 35.9102C8.13216 35.9102 8.44769 35.8111 8.7145 35.6106L18.0005 28.7455L27.2822 35.6106C27.818 36.0094 28.5401 36.0094 29.078 35.6128C29.6138 35.2162 29.8361 34.52 29.6328 33.8755L26.0836 22.7663L35.3696 15.9013C35.9075 15.5047 36.1298 14.8085 35.9244 14.1662H35.9244Z" fill="#CFD2CD" />
        </svg>
      };
      let whole = parseInt(rating[0]);
      let dec = parseInt(rating[1]);
      if (i < whole) {
        stars.push(star.filled);
      } else if (i == whole) {
        if (dec <= 2) {
          stars.push(star.empty);
        } else if (dec >= 8) {
          stars.push(star.filled);
        } else {
          stars.push(star.half);
        }
      } else {
        stars.push(star.empty);
      }
    }

    htmlResults.push(
      <div className={styles.result} key={index} onClick={(event) => redirectToProfile(event, result)}>
        <div className={styles.resultLeft}>
          <div className={styles.resultName}>{result.name}</div>
          <div className={styles.resultSeparator}></div>
          <div className={styles.resultMajor}>{result.major}</div>
        </div>
        <div className={styles.stars}>{stars}</div>
      </div>
    )
  }

  return (
    <>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className={styles.content}>
          <div className={styles.topBar}>
            <div className={styles.searchBar}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.5475 21.0951C12.9523 21.0951 15.1701 20.2893 16.9464 18.9336L23.6166 25.6052C23.8819 25.8614 24.2371 26.0032 24.6059 26C24.9746 25.9967 25.3273 25.8488 25.5881 25.5881C25.8488 25.3273 25.9967 24.9746 25.9999 24.6059C26.0032 24.2371 25.8614 23.8819 25.6052 23.6167L18.9335 16.945C20.3769 15.053 21.1381 12.7284 21.0933 10.3491C21.0485 7.96978 20.2005 5.67553 18.6869 3.83914C17.1733 2.00276 15.0832 0.73217 12.7563 0.233851C10.4293 -0.264467 8.00215 0.0387688 5.86929 1.09428C3.73643 2.1498 2.0232 3.89556 1.00798 6.04788C-0.00724572 8.2002 -0.264784 10.6326 0.277211 12.9498C0.819205 15.267 2.12888 17.3328 3.99341 18.8116C5.85794 20.2903 8.16775 21.0951 10.5475 21.0951ZM18.2824 10.5476C18.2824 12.599 17.4675 14.5664 16.0169 16.0169C14.5663 17.4675 12.5989 18.2824 10.5475 18.2824C8.49608 18.2824 6.52868 17.4675 5.0781 16.0169C3.62753 14.5664 2.81261 12.599 2.81261 10.5476C2.81261 8.49614 3.62753 6.52875 5.0781 5.07818C6.52868 3.62761 8.49608 2.81269 10.5475 2.81269C12.5989 2.81269 14.5663 3.62761 16.0169 5.07818C17.4675 6.52875 18.2824 8.49614 18.2824 10.5476Z" fill="#847577" />
              </svg>
              <input type="text" className={styles.searchInput} placeholder="Search by name, major, or class code" onChange={handleQuery} />
            </div>
          </div>
          <div className={styles.results}>
            {htmlResults}
          </div>
        </div>
      </div>
    </>
  )
}