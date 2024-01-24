import axios from 'axios'
import cheerio from 'cheerio'
import request from 'request'
import { JSDOM } from 'jsdom'
import FormData  from 'form-data'
import fetch from 'node-fetch';


   async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
  }
   


async function randomTiktok(query) {
	return new Promise(async (resolve, reject) => {
		await axios.get('https://brainans.com/search?query=' + query).then(response => {
			const $ = cheerio.load(response.data)
			const User = $('#search-container > div:nth-child(1) > div.content__text > a').attr('href')
			axios.get('https://brainans.com/' + User).then(respon => {
				const soup = cheerio.load(respon.data)
				const Vidlink = []
				const main = soup('#videos_container > div > div.content__list.grid.infinite_scroll.cards > div > div > a')
				main.each(function () {
					const Vlink = 'https://brainans.com/' + soup(this).attr('href')
					Vidlink.push(Vlink)
				})
				pickrandom(Vidlink).then(res => {
					axios.get(res).then(resp => {
						const ch = cheerio.load(resp.data)
						const result = {
							username: ch('#card-page > div > div.row > div > div > div > div > div.main__user-desc.align-self-center.ml-2 > a').text(),
							caption: ch('#card-page > div > div.row > div > div > div.main_info.mb-4 > div.main_list').text(),
							likes: ch('#card-page > div > div.row > div > div > div.main__info.mb-4 > div > div:nth-child(1) > span').text(),
							comment: ch('#card-page > div > div.row > div > div > div.main_info.mb-4 > div.content_btns.d-flex > div:nth-child(2) > span').text(),
							share: ch('#card-page > div > div.row > div > div > div.main_info.mb-4 > div.content_btns.d-flex > div:nth-child(3) > span').text(),
							video: ch('#card-page > div > div.row > div > div > div.main_info.mb-4 > div.main_image-container > div > video').attr('src')
						}
						resolve(result)
					})
				}).catch(resolve)
			}).catch(resolve)
		}).catch(resolve)
	})
}
async function surah(query){ 
    let { data }= await axios.get(`https://litequran.net/${query}`)
    const $ = cheerio.load(data)
    const Result = []
    const Isi = []
    var surah = $('body > main > article > h1').text()
    var bismillah = $('body > main > article > p').text()
    $('body > main > article > ol > li:nth-child(n)').each((i, e) => {
      const arabic = $(e).find('p.arabic').text()
      const baca = $(e).find('p.translate').text()
      const arti = $(e).find('p.meaning').text()
      Isi.push({
        arabic,
        baca,
        arti,
      });
    });
    Result.push({surah, bismillah}, Isi)
    return Result
}


async function listsurah(){
  let { data }= await axios.get('https://litequran.net/')
  const $ = cheerio.load(data)
  const Result = []
  $('body > main > ol > li:nth-child(n)').each((i, e) => {
    const name_surah = $(e).find('a').text()
    const link = 'https://litequran.net/' + $(e).find('a').attr('href')
    Result.push({
      link,
      name_surah,
    });
  });
  return Result
}

async function selectSurah(link){ 
    let { data }= await axios.get(link)
    const $ = cheerio.load(data)
    const Result = []
    const Isi = []
    var surah = $('body > main > article > h1').text()
    var bismillah = $('body > main > article > p').text()
    $('body > main > article > ol > li:nth-child(n)').each((i, e) => {
      const arabic = $(e).find('p.arabic').text()
      const baca = $(e).find('p.translate').text()
      const arti = $(e).find('p.meaning').text()
      Isi.push({
        arabic,
        baca,
        arti,
      });
    });
    Result.push({surah, bismillah}, Isi)
    return Result
	}

async function getSurah(surahIndex) {
  const surahList = await listsurah();
  if (surahIndex < 1 || surahIndex > surahList.length) {
    return "Nomor surah tidak valid.";
  }
  const selectedSurah = surahList[surahIndex - 1];
  const surahContent = await selectSurah(selectedSurah.link);
  let response = `*Berikut ${surahContent[0].surah}*\n\n`;
  surahContent[1].forEach((ayah) => {
    response += `${ayah.arabic}\n${ayah.baca}\n${ayah.arti}\n\n\n`;
  });
  return response;
}
export {

ephoto,
randomTiktok,
surah,
listsurah,
getSurah,
selectSurah
 }


import { fileURLToPath, URL } from 'url'
const __filename = new URL('', import.meta.url).pathname
const __dirname = new URL('.', import.meta.url).pathname
import fs from "fs"
import chalk from'chalk'
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")),chalk.white(`${__filename}`) )
//delete require.cache[file]
import(`${file}?update=${Date.now()}`)
})

