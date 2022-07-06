import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ data }) {

  // const lastInformes = data.data?.datas?.data[0]
  return (
    <div className={styles.container}>
      <Link href="https://data.larepublica.pe/">
        <a target="_blanck">
          <main className={styles.main}>
            <img className={styles.img} src='lrdata.png' alt="lrdata" />
            <div>
              <p className={styles.p}>
                investigación social, política y periodismo de datos
              </p>
            </div>
          </main>
        </a>
      </Link>
    </div>
  )
}

// Home.getInitialProps = async (ctx) => {
//   let responseInformes = {}
//   let responseData = {}

//   const objet_fect = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
//     }
//   }

//   try {
//     responseInformes = await fetch(`https://cronosservices.glr.pe/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data`, objet_fect)
//     responseInformes = await responseInformes.json()

//     responseData = await fetch(`https://cronosservices.glr.pe/api/content/data/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data`, objet_fect)
//     responseData = await responseData.json()
//   } catch (e) {
//     console.error(e)
//   }

//   return {
//     informes: responseInformes,
//     data: responseData
//   }
// }
