(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),i=n.n(r),d=n(2),o=n(0),s=function(e){return Object(a.useEffect)((function(){return console.log(",reached"),setTimeout((function(){return document.getElementById("lvl").classList.add("lvlAnimating")}),500),function(){document.getElementById("lvl").classList.remove("lvlAnimating")}}),[e.lvl]),Object(o.jsxs)("h1",{id:"lvl",children:["Level ",e.lvl]})},u=function(e){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{style:{paddingTop:"5px"},children:"Memory Game"}),Object(o.jsxs)("h2",{style:{paddingLeft:"20px"},children:["Turn ",e.turn]}),Object(o.jsxs)("h2",{style:{paddingLeft:"20px"},children:["Level ",e.lvl]})]})},l=function(e){return Object(o.jsxs)("footer",{children:[Object(o.jsxs)("div",{id:"scoreBoard",children:[Object(o.jsx)("h1",{style:{paddingRight:"10px"},id:"scoreTitle",children:"Score || "}),Object(o.jsxs)("div",{id:"scoreContainer",children:[Object(o.jsxs)("h2",{children:["Current: ",e.currentScore]}),Object(o.jsxs)("h2",{children:["High Score:",e.bestScore]})]}),Object(o.jsx)("h2",{children:e.isGameOver?"You Lose!":null})]}),Object(o.jsx)("div",{id:"menu",children:Object(o.jsx)("button",{id:"menuBtn",children:"Menu"})})]})},p=n(6),m=new(n.n(p).a),g=n(4),A=n.n(g),j=n(7),b=function(e){var t=e.card,n=t.key,a=t.name,c=t.imgSrc,r=t.energy,i=t.dmg,d=t.def,s=e.card,u=e.spendEnergy,l=e.damageEnemy,p=e.gainBlock,m=e.endTurn,g=e.endGame,b=function(){var t=Object(j.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.isTapped?g():(n.toggleTapped(),u(r),l(i),p(d),r>0&&e.setLastEnergyCost(r),i>0&&e.setLastDmg(i),d>0&&e.setLastDef(d),m());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsx)("img",{className:"cards",onClick:e.isAnimating?null:function(){return b(s)},alt:"".concat(a," Cost: ").concat(r," Damage: ").concat(i," Block: ").concat(d),src:c,id:a},n)},h=function(e){var t=e.deck,n=e.spendEnergy,c=e.damageEnemy,r=e.gainBlock,i=e.endTurn,s=e.endGame,u=function e(n){if(5===n.length)return n;if(4===n.length&&n.every((function(e){return e.isTapped}))){var a=t.filter((function(e){return!e.isTapped})),c=a[Math.floor(Math.random()*a.length)];return e(n.concat(c))}var r=t.filter((function(e){return!n.includes(e)})),i=r[Math.floor(Math.random()*r.length)];return e(n.concat(i))};Object(a.useEffect)((function(){return m.on("turnEnded",h),function(){return m.off("turnEnded",h)}}));var l=u([]),p=Object(a.useState)(l),g=Object(d.a)(p,2),A=g[0],j=g[1],h=function(){return j(u([]))};return Object(o.jsx)("div",{id:"hand",children:A.map((function(t){return Object(o.jsx)(b,{card:t,spendEnergy:n,setLastEnergyCost:e.setLastEnergyCost,damageEnemy:c,setLastDmg:e.setLastDmg,gainBlock:r,setLastDef:e.setLastDef,endTurn:i,isTapped:t.isTapped,endGame:s},t.key)}))})},f=n.p+"static/media/Cultist.e9eef443.png",O=function(e){return Object(o.jsxs)("div",{id:"enemySide",children:[Object(o.jsx)("p",{className:"indicators",id:"intentIndicator",children:e.enemyAttack}),Object(o.jsx)("img",{alt:"A cultist from Slay The Spire",src:f}),Object(o.jsxs)("p",{className:"indicators",id:"healthIndicator",children:[e.currentEnemyHealth,"/",e.enemyHealth]})]})},S=n.p+"static/media/Ironclad.64318e21.png",v=function(e){return Object(o.jsxs)("div",{id:"pcSide",children:[Object(o.jsx)("p",{className:"indicators",id:"blockIndicator",children:e.currentBlock}),Object(o.jsx)("img",{src:S,alt:"The Ironclad From Slay The Spire"}),Object(o.jsxs)("p",{className:"indicators",id:"energyIndicator",children:[e.currentEnergy,"/",e.energyPool]})]})},y=n.p+"static/media/stsBackground.b67cf774.jpg",Z=function(e,t,n,a,c,r){var i=!1;return{key:e,name:t,imgSrc:n,dmg:a,def:c,energy:r,toggleTapped:function(){i=!i},get isTapped(){return i}}},x=n.p+"static/media/Bash.92c657b5.png",C=n.p+"static/media/Neutralize.8b6dfb05.png",k=n.p+"static/media/Zap.14405d7b.png",L=n.p+"static/media/AfterImage.5af3a650.png",R=n.p+"static/media/Eruption.fa07b89d.png",E=n.p+"static/media/Vigilance.8fb08f92.png",T=n.p+"static/media/Bludgeon.2f82a52d.png",w=n.p+"static/media/Vault.18b4ebc9.png",D=n.p+"static/media/BiasedCognition.45cdeae4.png",M=n.p+"static/media/TwinStrike.c6589de8.png",Y=n.p+"static/media/CutThroughFate.81858dcc.png",V=n.p+"static/media/DaggerSpray.76c27c4f.png",W=n.p+"static/media/Claw.7341839a.png",N=n.p+"static/media/FeelNoPain.bb618a36.png",B=n.p+"static/media/NoxiousFumes.22e18cea.png",H=n.p+"static/media/Tempest.d3788f38.png",I=n.p+"static/media/Sanctity.a0707fea.png",G=n.p+"static/media/Reaper.ac849383.png",X=n.p+"static/media/Envenom.6b2a3b02.png",z=n.p+"static/media/Seek.efc355c3.png",F=n.p+"static/media/Ragnarok.af2c0321.png",J=n.p+"static/media/ShrugItOff.9ba1bf5e.png",P=n.p+"static/media/CloakAndDagger.45407ab5.png",U=n.p+"static/media/Coolheaded.45490e63.png",K=n.p+"static/media/Consecrate.f6930f4e.png",q=function(){var e=[Z(0,"Bash",x,8,0,2),Z(1,"Neutralize",C,3,0,0),Z(2,"Zap",k,0,0,1),Z(3,"After Image",L,0,0,1),Z(4,"Eruption",R,9,0,2),Z(5,"Vigilance",E,0,8,2),Z(6,"Bludgeon",T,32,0,3),Z(7,"Vault",w,0,0,3),Z(8,"Biased Cognition",D,0,0,1),Z(9,"Twin Strike",M,10,0,1),Z(10,"Cut Through Fate",Y,7,0,1),Z(11,"Dagger Spray",V,8,0,1),Z(12,"Claw",W,3,0,0),Z(13,"Feel No Pain",N,0,0,1),Z(14,"Noxious Fumes",B,0,0,1),Z(15,"Tempest",H,0,0,0),Z(16,"Sanctity",I,0,6,1),Z(17,"Reaper",G,4,0,2),Z(18,"Envenom",X,0,0,2),Z(19,"Seek",z,0,0,0),Z(20,"Ragnarok",F,25,0,3),Z(21,"Shrug It Off",J,0,8,1),Z(22,"Cloak And Dagger",P,0,6,1),Z(23,"Coolheaded",U,0,0,1),Z(24,"Consecrate",K,5,0,0)];return{pool:e,get untappedPool(){return e.filter((function(e){return!e.isTapped}))},untapAllCards:function(){e.forEach((function(e){e.isTapped&&e.toggleTapped()}))}}}(),Q=function(e){var t=e.deckSize;return Object(o.jsxs)("div",{id:"deckIndicator",className:"indicators",children:[Object(o.jsx)("img",{id:"deckIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAFoJJREFUeNrtnVuMJFd5x3/fd6p7ZnYuuzu7vq0xXhZjwMRgQ+IoN3FPcEJCQEqEIFEekiceglCiIMEDBAkioUhxgvIS8RChCKxECiSRcQLhYgKKCVd7wWAZ22uwd72zl9nZuXZ3nfPl4VRVV3dP98z0dM9t+0it6Z7uqjp1/ue7/c93vhIG1P79ba9/LfDV/LMFI4Sw+RMYxY9NkPJXYljPYwXts9tmmC+dSKF5baG1H9tqpftrv0dVFdWWS73ud/7tKw8N4rLKqB3olvR74F+94ERJDAx16oMPpQlrW5vfrZ8MGaD0bEWgkV2/rqr6j956M1LqygfOPLuzAGfH/mJ+jovPX75r9vrZprITMAm5qtsI7pafiCDW4/uOY7cHSWkYRWx4KJbvoYwdIiKCYNmPLszNvwZw2dcp8M3s744CPA08mP3l6pVljp+4CbPsHtSjIe0moxuaC1l/gAY+6NIcyKFdpHRqKd5I6wyVzCiLCFcXlu4rHbcI3ArM74YNThm1PvytnRvjZOBzNJMB8+BTa5EJG2HbPkwY4GR4lj/ZVifLzXvSpZUYD3i4/kUJx09WyYODEDxmthue0x6T3ug/SmYZROHSTwOXfuZjkIaQqFJNklZDvbsAC/hAurwMZvgUZq+f4qW/MgFplFtLDQvhGga48K8wFCwOvSbC440acz9JcUl0tBJ1VCuV3ZXgbh6LIZGZsGg9LLMgIY3BwKi1421YaIYCIhn9MiCHLxmc4oGQcUIWRmBuNQoOwZAg2IBVXN8AJ0kzugjBmL15jNf+0Q2EEKV38ogjBMUyvi9gmIXhBiJ72KlqNacCkhTCcPMr4OgtDgRUhS/d71j9qYHupg0u0wPA2ITjulNjBG+FCjIra6NrlxW1DjZGmtGGwaHDjomjOYslVMbZayo6dtRCfI3a1idAPm424Hiyb4B1rHSoN7TiRoHugKgPqTi0mqBuFwG+6d2vaZHeY4dzG1sYZsw3V+LEfMa2XpOYtdy7iWKiXTShcfwNp+AXXKuKfuTx3ZNgM5BKAMKmb/habmL09JYlcWjVDYTd2hLA93/0d5udUJda8CM8By/sHS2YpQ/8zbuKz7/1vk8PTYLvAg4D+PrKtCZjSasaCk3vzwIt4bpc26iXvWLDoLSUmrlZpZCqZaCSMedeS1xVAlgAvj8sgD8B/GpuK8rdFgJiDdRoC5MyqhLZnbX0PYOwLy14G6r1lqCpGX52HDktwn+UPn8d+LVNm9ItdtP3Due7fxy1gTU/MBv8Lx9/Z+uZG2ubPrmZQbACaE0y72K9WWYgPbwOk2bGmgBq+2T2lG43ZOaraa6sVRo2r938Z/+6FZe3//n9favo12WvXH+c2hTJbIZMTsP4NGTZRs99w1i92HkfAjw/Zvz3cY+uI/YB441XqtzQUAyoi/HA9DJ1iUuPJoKpDl9hRMJ409cxVbIeUjXht6+OUTXBDCaOwc33ZAsyCLJ6BV2dj2uHZj3DSYNTwIdL//oqpWzWrQL8JuCDTTBkk8l0hhyahuM3QzDEwdkfw+XHssTUUnMG3zsc+Ms76us7YQLjT09y13KCF1jSwMdunmNJQybdAkmyI9IoaWPTv7UkKbjkyaC8+NlZpoJgHmZfAifeEleREEUvP4WsXM4usqFmPAl8qA3DvgHeXkpOyPlLUAV1IK5TPScukKjh1gHYCzhnqAuYgNPAmBpp7s0JBN0Z91zD5q8TXBOscQLqAipxtUhdphFs6zGldIYj6VCIjm4umxhg21v2CjSJAL+xsOyaeQ3S5kd0uwfZELXo7srgndOBACwKC3Oer/3fUpSoRuDkG2vc+obmgr9pwFw2CYAkqcTEFQNX8UBUfw2Bey9XuPdyhYbEgXzhKoSc9tQAaYplKlrUUXFaRGxmnmB+OKhmS58eOFVP+ONLMwSMxIQvTq/yxekVEhMC8J6Lk9xWr0QNZDCTxnu1AEmpe+rgudMpZ79SQ5N4H4unDJlqzt5GCFs0kQOXYKG+FrhwpgEi+Ebguishy/AozVKJ09wAVS1ou/LSowncWFfuXkqoZ153LZR9UIseeubsiVnTq84d92FnGwhMBeVVq1V85kQ9OlEvPH0TuK2WcPda/L4sxdZuZgVWFoxLZzxaiT9onDCYavXvCoJkNyQ4n135zh5R1k8Ya40TuuqjIOCxpmrboyxY3kefefvtZsaLbSpoFQHRbPxsoDuiNgR4la4J1yah5g/ndl8aHreVnpXwdQZTacxArwcYC63maVWNRpaRubxFh0o20Y2+49tiPwKMmTAVlKoJXoztrPRZ3RNqaUECajVZ6BE7rW4H4L8F/mG9L5a/e+7w8unz38M4YsD4+BjHbzi+qRGTzJTmg/+yReGTP0iK0ZuMxpSqj6B/5MRVHp2oR9rNYKW0azEAdfFtXF8zI3HSr++d5xK4Kr5n6GtdNAzAuAipRL/2HUtTvHV5svjNRFD68QREhYv/+UNW1tay/GlZmLn7lrtn7rl1YRgAr2Wvjrb4reeac9mMEKmqvmQiMZgKTfgrZW/SogQvuRJQYWsyKIOWbus8R9WE6oAYNqt7wlojN3N25X+fWpi559b5gavo3/uL7hTYfS98wWA4vLZPW54eIjHIzr0Xa6MBu1GAIp35RR2/bRVhnyHq882+snPOQS86cufi4E5mjxAyJ8IEFSkyDMtJaCKCmrYF85vEt15Hriw2Lzp1CJs81Ayb5hcItUbhvZeTn3y1ArPTTXCXV5CllQJoOTyNZQnozuBl9QrOItAvqid4C4RoTVDZQr/NSmpIhppjPBSABUg91OoQGtGrrlBhPPcUO/gRYVyrfVxIkPkFkocejhcJHnvlywmvuiMmaYtQ/+4jyPkLhZSnab2Z5XbjDchbXhdjKxX06WfR0z8G5yAY9vpfwq4/BmaMm/CB8zNMZa69CayQFkJeRamI26T+MkJoxLkWPDasuH2YEiw7xDgZRPDihuR1VjOk+X3xAoJ25h1LEeOBdvY5dGGlZFMWfQMzs98AHmRriNEox5TS5KGdGJWW4E3AaQkw6e0HqIvZFc512NRUDK+RPanKRimDezNdZc8DbAJvXZzk52vjKIKZ0cg4HRVhbrXBQ7n8qCJzF+H7jyFmmAiyvNxqDlwSwVAHqzXk9I8zey3x2IxhM+DNCxNc56YwM6pBGPMSt5fkQqdNV1/2aIbDngc4AG9dmkRLkricaLavVnlkdZWvYJFkEUHOX0TOzTWVZq6ec4DLycarNeTRx5sSWPptwHjz1QleGabw2WawhjTzpsjYpxIPOwJ4OypaShum61ldJZep7g575jbLI5XU+TotFaOehUX7tSXs92aGL8WzMRTrT5oMI2QhizfbVvTSvnzo5YADHIhOUl5LZku8dRoolqaEKHUCwQInJ6/jY3e+A0SoiOPzz5/mC+dPI1nIMi4Jm0noSS3whtnbeeOx20nNYwYnJ2YJ1kxvnSIpE2yEUgKAaXP9Vw0+eVPKk+OGAhMe3vdchYlwgAG2lsWuLe6da2enSv+eSqq88sgtkS7UhG9dOYM3X6xmbXYrdTDj+uoUd06doJHFpcFa14iSkm4wA19OqrOmKhfgyXHjkcmAA6b8NSDBw5s4FCraW2iWcerzXIHQovL7DfyVuFDirFNdH0iA1xwsl3KyerlB1RBfm4HKW2DNx2yQuqa4ChydHiPfmhdWhW5EUZII05NVDEjNoxVjKa3RyAAe1wRXot7K2sDalt/NrGeKVVzmFILAmB4wgJ3BfbcJD08LTijFjp2trvCO54y3P2s0soEYDw5n0iEpTpTHF5/noz96ACdKre557x++nCf/4F2k9YBzwjvf/1W+8cgciWu9WuqNe+48zv0ffxPeB6pVx9996of8yac+w1hV8Wa8/9SbuWPqpqgZgIX2/LayoGtTfSutCQArDv7sVD2bkPDLJ+Cf2ZkiYzsqwUsJJBvoqrpCTcu7dXrzRd4Cy2kNJ8pa6nFJlOBG3ZM4JUm6M1mJE45MV0l9YKzqcBVY8jVS7+JCgtlAuCojaq/cX1zTA6iiN7R9GQ4hFunBZflVZWaSTbhLokCiJD4gTkpppp1HigjOZSmNiWYpM7SEXE7ylEdabLNk3nL5JiT76+i6iaNrqLe/AZbe4E56uHVFmvGiwKNHmjlZty8LMz4GWCbdJUlFeObsEl//9jl8I+BUmF+qQ4lHlhK4C4t1vvadc3hvVCrKT88ukddtFoSnVy8VHraKcNuh63ASg65lB2cmSmbGGeJi5zT7vtdkFFFELPu7HxcbZHMMXpAI7od/pHiBSoDP3GJ88M743gt85CeOOxd1w1CjWlE+/eBT/NPnnyw6ESSOeJpBXM2cpsQJP/jJPL/5ngdbJki1osX7f3z24cKVmnRjfOKO32fSVVGL4H7opb5rOpBam4S3aQ51CYmAOm2lTw9qmOQlvrSUiOfWUdEbMkgqLcRGw7onm4pA0oOqjPy3ZA5dR22/lj6OqErp/VUlRHCrIc78FoLBoJIPplBwzU6URNyO3UIlQDUuFZPsE3p6iCk7eXJ6VgWvkRJqcZ09qrBm9aw5Ue6/JcajavDDmWaCnRp86Vjg9HQmiT4lnH4M0shWza1dbVlp6gjRJO7o2y7T0FD41xsaVCvRbZurgua7DS1bhy4Tmeukrsgu7IEfogRHKsCyZDhreELdIsAGmnO8ZlyoJHzmBUnh77aoZ+DLs765D6hWwz/3baxWK9RoLynWAT1aoy7w2RsaMCbFREzK+dsmbZVzrK2W/OYjgX0C8AY6uZw8blE1d+1kOSgOQqou21G+s61idC8kJHuzwsHecLI2DG5Luk13ceSklMfVtgBiu/U8j920wfHZSRYJC5+iPqChk+WjYbBSK8RUVJFSXlX45rewi5fj4AaDxi48SSBtEL78UHMX/uxR5J5XNzfBtRvY4NfnvgIQ3I7J1vCu0vSxYnpLXrND16P9AnjfESvmXphduISdPVeS4l0obBoMzl8oUm6LvCzrxU7Z+szODtZaHi7R0fehbZVZc+nQXa5YW0653ScloYY6YkLOBcsWhX9UJ29PS7ABiUsYGxvHqycRQaSGWeiinYTyTlrZj0W29mgtZR2u/GZSPCqKdvC86HzXuooUzm/aLY7UVp9EtUTUB/DeMF8q2zBEFd9LexTnDYb4QAhs/SlXlu9SlOhSDDnsS4YF7uJSnbPnlghpQAVunwn4E2LNxAdpPcBJKUwCLaisQHjFUbgxgCiG0WgUQ22AhFKuTJIoSaIt3qx1A7D0hKq4YS6QljLpJBZbK4jOxGnxVBRmj8INumW17E3sJZNBzp5bjDteE2Vxqbb3HozVqzkVnnhqnu/9Vxp36Rn86etvDDddP4EVWXHSw/VutWfuN+7OwqYYU89drBGykg4+iK01IkdoBrOHxzl6ZLyw9SG02n1R1wQ1ewhG/n5hscGVxXoRolWcDxqT7E1FODpdKXhvMyNN6Sz8teHkF87PLdnnHnxSRQRTYfaZFWZ1OOXSh66iJRuMYDFdpZ8Q0LwVJXaDGd6XEtRLIbSZkQYj9VZkV3YAbM20DZFm3UuRKMG+dC3B0Py6kl1XiqIGpL2yD3qMi7c4sXKAh+mjDBFgiYluEjeMVSuOsaoSbOuBctz4l+0ZCjH7IgdYPTR88wkmss0+a2nAK4mimTOgIlSrzewLM9AgfV2jWnE4pxnA9FwN26M2WDj3/BJPLCyTV+27NH9VJg8lW57xBoxVkpJqhOXVtKhFfejQGCdPzsYaWcHQFypHj4wVtte5pMPeF1laAi4jT1SFxatLnHlmPv5P4Okz87K0XM+LoTBR1QL8YJCmoS/NtrRc58kzlxARPMbP1ZSj2l/Rll0BWFU4e36Rb88vZ1mUwsPfSSWE/qzMRLWKc82nujQH2Thx4zT3/voYIUQVevTIGCpT+Cwt1zmHtC/jlSaiy2ywc8riwirPPH0J5xRV4QtffFrOPr9c2GnLt/MLWDAajUZf9xMwGuYRYsbJ0WNHeNWxw/ghUJhDU9GaZSzmqS4VcX3vOqhWXSFpLQNlRpLEUCwPtbaWwNaaCZCraM3Cu6SiVKq6rgo1M0T6IzaCZWFf9l71Gt/h3z1mzQIflZjmkzkvzmkRcDsnPSS4pKJdCdzMAZL9yantDsDtEujTdNMsQa3RaHuUXvNRFmfPX+VzDzxW2Ocv/0+Fqcmk8JylLXWmHIxISd+LwNJSjaWlelF09PJ8jXrDt2ilXNK3qo3S0hNq7ECsJq3jeHWqx82qtNDyoKGyXK3WAs+erbepz+7X0R7Xbe+jaNu6Vl7eoQ+AysfYQZTgQSjjbt9ITxsmmwb4ILZ98khQ29e96MaNC8NfORuuBA8oT1S6ZUf0FaJs41g/mOVAFaGSVLLsTMPp8PSKDhXcUdvQ8AxbiocH8OgZ79tW4XtaRYtI8Vrvlpy6azY1RyQSKbYDEpwMa06qKkm2g65pR0ut6kaiS7YXeojJhEM6s+wp7/dajhCGHCaNHK3dbkNMfG99/OyGG/zyrR9ZEdH27zqOX/epLrbt3fK9tqBIH+eSXY4mhhsHb7WIidm6g5zTfFZyUrp66dsY1KIUUpdzb+W8Vr4X2DWg9ySTta3BkL1ZmHu32p4E2AaoNa712H33Fht6DGZHSLWBZBXpPGw/J2s7rmGvVaZu38VnM9m1JcH9+uky4PMNCtwN9dUQFce+B3ivKNXt+Q0jgPd8pG02eihH3xIhWxxMGy10HOAwadQOloo+EG2ICmdPqmjbJhu1LyQrT9cdMp25Z23wVoDabzZXValkD73Md18MS4xHKvqAx3kjgEdO1qiNAB61EcCjNgJ41K6lMGlPzP5+d2aYxdCnS8rwTjJ1I4B7NekzY1ninuX1gdxZGnZoKnpE9++NsRqMBEtnhxMRxlWLxPd6MMJ+E+AhSlVFmgAke7GMkrQWk2v57M149aEqd01UM1sG/zq/zM/qaaEynO49/05VUadDnR4BOJEIb5tMyB9ZUhWNZR73qgSvdytJVqMyn7F6LYvsOhI8LvlWVhlqucpk0OPTbSIGYkUZtpnYNlRDuAOOQ7D19yhLuXy87DWARQghsLZWK0arkiRUXRIfrSPC9RUXNzzvwKzdjoqWgXVMus6j65wQpLnpu+49oZbmQxkLuokOBOiBSXCj3uDC3MV4E8E4fPQwR44cjnUqgdfNTI52KpVArpck98rVK1y5PB8rAglUfKDikj0kwetMXtkdDbg/w23y/dSDdwUGCnD7fhwVuaZA7QcYKZUnbgqDDQzkZCB3Y4ZLEiZnZop/LXvP3IWLW2b6Ysil+y7xLoRACFuP9A2YEjh8eKYQhtryCmmaNh0vk92Q4JYizCSJY2Z6upDcucuXePzy5Y7Hsm4uxnaIG1YFgOHolDRNSRvplrnrEIyXHT/KTcdmixLJtUad1AKDiDeSQY5bvvUy7hGKhUi1L4Bl30mwE8X6IG+iXxVLIxZq2gZnh7fLPyTtJxMGUOB6Xxru7XVapTl2baPndkuCF4F783OcDXbXj+Yu3geGIKylDdKk2ndcLTYsB02GckbTClZJ+poWz6w1eH5unnx/5NHU//1MsCcsVlKtASu7AXAKfCP/8LgP3vla0WmXqa1rx4Xuv6rfcggs1OoFExjMnpiE76RmLhtnv+MAv/fp51o+v/vFJ11LXDcKb7ekAbT8XlAMJ1FOtqXIRik7B7z9P1PfbMkNWpKpAAAARXRFWHRjb21tZW50AEZpbGUgc291cmNlOiBodHRwczovL3NsYXl0aGVzcGlyZS5nYW1lcGVkaWEuY29tL0ZpbGU6SWNvbi5wbmfrIJFQAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAyLTAxVDE5OjM1OjI0KzAwOjAwyt2LGgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMi0wMVQxOTozNToyNCswMDowMLuAM6YAAABGdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuNy44LTkgMjAxNi0wNi0yMiBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmfMIp+JAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OmhlaWdodAAxMjgMIUJQAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADEyONCNEd0AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTUxNzUxMzcyNH2D2kUAAAATdEVYdFRodW1iOjpTaXplADEuODJLQkLuGAP7AAAAAElFTkSuQmCC",alt:"Icon Indicating Your Deck has ".concat(t," Cards")}),Object(o.jsxs)("p",{id:"deckCount",children:["x",t]})]})},_=function(e){Object(a.useEffect)((function(){m.on("turnEnded",(function(){q.untappedPool.some((function(e){return r.includes(e)}))||t()})),m.on("levelCompleted",(function(){q.pool.length===r.length?console.log("You Win!"):s()}))}));var t=function(){return m.emit("levelCompleted")},n=Object(a.useState)(function(){for(var e=[],t=0;e.length<6;t++){var n=Math.floor(Math.random()*q.pool.length);e.includes(q.pool[n])||e.push(q.pool[n])}return e}()),c=Object(d.a)(n,2),r=c[0],i=c[1],s=function(){var e=q.pool.filter((function(e){return!r.includes(e)})),t=Math.floor(Math.random()*e.length);i(r.concat(e[t]))},u=r.reduce((function(e,t){return{energy:e.energy+t.energy}})).energy,l=r.reduce((function(e,t){return{def:e.def+t.def}})).def,p=r.reduce((function(e,t){return{dmg:e.dmg+t.dmg}})).dmg,g=Object(a.useState)(u),A=Object(d.a)(g,2),j=A[0],b=A[1],f=Object(a.useState)(0),S=Object(d.a)(f,2),Z=S[0],x=S[1],C=Object(a.useState)(p),k=Object(d.a)(C,2),L=k[0],R=k[1],E=Object(a.useState)(l),T=Object(d.a)(E,2),w=T[0],D=T[1],M=Object(a.useState)(0),Y=Object(d.a)(M,2),V=Y[0],W=Y[1],N=Object(a.useState)(0),B=Object(d.a)(N,2),H=B[0],I=B[1],G=Object(a.useState)(0),X=Object(d.a)(G,2),z=X[0],F=X[1];Object(a.useEffect)((function(){b(u),R(p),D(l),x(0)}),[u,l,p,e.lvl]);return Object(o.jsxs)("div",{id:"gameBoard",style:{backgroundImage:"url(".concat(y,")")},children:[e.isGameOver?Object(o.jsx)("button",{onClick:e.startGame,children:"Start Game"}):Object(o.jsxs)("div",{id:"field",children:[Object(o.jsx)(v,{energyPool:u,currentEnergy:j,lastEnergyCost:V,currentBlock:Z,lastDef:z}),Object(o.jsx)(O,{enemyAttack:w,currentEnemyHealth:L,enemyHealth:p,currentDmg:H})]}),Object(o.jsx)(h,{spendEnergy:function(e){return b(j-e)},setLastEnergyCost:W,gainBlock:function(e){return x(Z+e)},setLastDef:F,damageEnemy:function(e){return R(L-e)},setLastDmg:I,deck:r,endTurn:e.endTurn,endGame:e.endGame}),Object(o.jsx)(Q,{deckSize:r.length})]})};var $=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),i=Object(d.a)(r,2),p=i[0],g=i[1],A=Object(a.useState)(!1),j=Object(d.a)(A,2),b=j[0],h=j[1],f=Object(a.useState)(1),O=Object(d.a)(f,2),S=O[0],v=O[1],y=Object(a.useState)(1),Z=Object(d.a)(y,2),x=Z[0],C=Z[1],k=function(){return C(x+1)};Object(a.useEffect)((function(){m.on("gameStarted",(function(){v(1),c(0),h(!1)})),m.on("lvlUp",(function(){C(x+1)})),m.on("pointsEarned",(function(){c(n+100*x)})),m.on("turnEnded",(function(){L(),v(S+1)})),m.on("levelCompleted",(function(){k(),q.untapAllCards()})),m.on("gameEnded",(function(){h(!0),C(1),n>p&&g(n)}))}));var L=function(){return m.emit("pointsEarned")};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(s,{lvl:x}),Object(o.jsx)(u,{lvl:x,turn:S}),Object(o.jsx)(_,{endTurn:function(){return m.emit("turnEnded")},endGame:function(){return m.emit("gameEnded")},startGame:function(){return m.emit("gameStarted")},turn:S,isGameOver:b,lvl:x,lvlUp:k}),Object(o.jsx)(l,{currentScore:n,bestScore:p,isGameOver:b})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)($,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1b247d3a.chunk.js.map