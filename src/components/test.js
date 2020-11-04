const items = []
const parent = document.querySelectorAll('#ember1456 a')
    
var index = 0

const extract = setInterval(()=>{
    if(index === parent.length){
        clearInterval(extract)
        console.log(items)
        console.log("operation successfull")
        return;
    }
    parent[index].click()
    setTimeout(()=>{
        const src = document.querySelector('#content-inner iframe').src
        items.push({src})
        index = index + 1
        console.log("extracted " + index )
    },8000)
},5000)

var index = 0
const extract = setInterval(()=>{
    if(index === 3){
        console.log("operation successfull")
        return;
    }

    index = index + 1
    console.log(index)
},5000)


// MVC PROEJCT STRUCTURE

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfoeqpeoo9q93d9110?&autoplay=true&crosstime=187" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfocsun9aqs06nps60?&autoplay=true&crosstime=170" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfrf2peoo9q93d912g?&autoplay=true&crosstime=317" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg06apeoo9q93d91f0?&autoplay=true&crosstime=458" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg06apeoo9q93d91f0?&autoplay=true&crosstime=458" }

// Store Database

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdft7sun9aqs06npsf0?time=123&autoplay=true&crosstime=593" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfqdcun9aqs06nps9g?time=389&autoplay=true&crosstime=278" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg1aipeoo9q93d91m0?&autoplay=true&crosstime=373" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg0d2peoo9q93d91i0?&autoplay=true&crosstime=332" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdft7cun9aqs06npseg?&autoplay=true&crosstime=242" }

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg0icun9aqs06npsrg?&autoplay=true&crosstime=364" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg1i4un9aqs06npt10?&autoplay=true&crosstime=533" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg1m4un9aqs06npt1g?time=122&autoplay=true&crosstime=597" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfui4un9aqs06npsl0?&autoplay=true&crosstime=259" 

src: "https://platform.thinkific.com/videoproxy/v1/play/bkdftckun9aqs06npsfg?&autoplay=true&crosstime=236" 

 src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg0qsun9aqs06npss0?&autoplay=true&crosstime=368" 

 src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfvr2peoo9q93d91e0?&autoplay=true&crosstime=337" 

 src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg1iqpeoo9q93d91mg?&autoplay=true&crosstime=603" 

 src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfukqpeoo9q93d91bg?&autoplay=true&crosstime=220" 

// MODELS

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfoksun9aqs06nps6g?time=90&autoplay=true&crosstime=165" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfokapeoo9q93d9120?time=23&autoplay=true&crosstime=117" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfofapeoo9q93d911g?time=44&autoplay=true&crosstime=222" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg08ipeoo9q93d91h0?time=19&autoplay=true&crosstime=408" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg0ukun9aqs06npssg?time=22&autoplay=true&crosstime=406" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg04sun9aqs06npsq0?time=20&autoplay=true&crosstime=362" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg06ipeoo9q93d91fg?time=103&autoplay=true&crosstime=314" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg07apeoo9q93d91g0?&autoplay=true&crosstime=324" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg07apeoo9q93d91g0?&autoplay=true&crosstime=324" }

// Handle Authentication

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkfbkun9aqs06npufg?&autoplay=true&crosstime=512" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkeh4un9aqs06npue0?&autoplay=true&crosstime=314" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkhdsun9aqs06npui0?&autoplay=true&crosstime=1257" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkfeqpeoo9q93d92tg?&autoplay=true&crosstime=509" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkgt4un9aqs06npuhg?&autoplay=true&crosstime=883" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdke82peoo9q93d92sg?&autoplay=true&crosstime=209" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkfekun9aqs06npug0?&autoplay=true&crosstime=389" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkf7cun9aqs06npuf0?&autoplay=true&crosstime=363" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkg12peoo9q93d92ug?&autoplay=true&crosstime=662" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkd02peoo9q93d92rg?&autoplay=true&crosstime=100" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdkd02peoo9q93d92rg?&autoplay=true&crosstime=100" }


// VAlidation Express Validation

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnmvsun9aqs06npvt0?&autoplay=true&crosstime=188" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnnqapeoo9q93d94cg?&autoplay=true&crosstime=195" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnncapeoo9q93d94ag?&autoplay=true&crosstime=168" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnnrapeoo9q93d94d0?&autoplay=true&crosstime=346" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno3ipeoo9q93d94eg?&autoplay=true&crosstime=519" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnnt4un9aqs06npvug?&autoplay=true&crosstime=326" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno2qpeoo9q93d94e0?&autoplay=true&crosstime=345" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnng4un9aqs06npvu0?&autoplay=true&crosstime=211" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno6apeoo9q93d94fg?&autoplay=true&crosstime=602" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno1kun9aqs06npvvg?&autoplay=true&crosstime=361" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno1ipeoo9q93d94dg?&autoplay=true&crosstime=418" }
​
11: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnnpapeoo9q93d94c0?&autoplay=true&crosstime=246" }
​
12: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdnnh2peoo9q93d94bg?&autoplay=true&crosstime=187" }
​
13: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno52peoo9q93d94f0?&autoplay=true&crosstime=451" }
​
14: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdno52peoo9q93d94f0?&autoplay=true&crosstime=451" }


// File Upload Multur

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefip4un9aqs06nqbeg?&autoplay=true&crosstime=237" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefit2peoo9q93d9gc0?&autoplay=true&crosstime=243" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefitipeoo9q93d9gcg?&autoplay=true&crosstime=344" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefit2peoo9q93d9gbg?&autoplay=true&crosstime=373" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefirsun9aqs06nqbf0?&autoplay=true&crosstime=336" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefit4un9aqs06nqbfg?&autoplay=true&crosstime=300" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkefit4un9aqs06nqbfg?&autoplay=true&crosstime=300" }


// Manage Post

Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkld8lsun9aqs06nt5kg?&autoplay=true&crosstime=165" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldk3qpeoo9q93dcb90?&autoplay=true&crosstime=1148" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldjn4un9aqs06nt5s0?&autoplay=true&crosstime=928" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldgtipeoo9q93dcb60?&autoplay=true&crosstime=504" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldiucun9aqs06nt5qg?&autoplay=true&crosstime=865" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldfq4un9aqs06nt5ng?&autoplay=true&crosstime=396" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldhesun9aqs06nt5pg?&autoplay=true&crosstime=678" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldessun9aqs06nt5n0?&autoplay=true&crosstime=337" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldj02peoo9q93dcb7g?&autoplay=true&crosstime=655" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldi0kun9aqs06nt5q0?&autoplay=true&crosstime=545" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldjbkun9aqs06nt5rg?&autoplay=true&crosstime=774" }
​
11: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldgdsun9aqs06nt5o0?&autoplay=true&crosstime=539" }
​
12: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldj92peoo9q93dcb80?&autoplay=true&crosstime=943" }
​
13: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldh8qpeoo9q93dcb6g?&autoplay=true&crosstime=571" }
​
14: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkldh8qpeoo9q93dcb6g?&autoplay=true&crosstime=571" }


// EJS TEmplate

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfq3kun9aqs06nps90?&autoplay=true&crosstime=358" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfug2peoo9q93d91b0?&autoplay=true&crosstime=153" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfueapeoo9q93d91a0?&autoplay=true&crosstime=286" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfvfqpeoo9q93d91cg?&autoplay=true&crosstime=392" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdft1cun9aqs06npse0?&autoplay=true&crosstime=291" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfvmipeoo9q93d91dg?&autoplay=true&crosstime=422" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdft42peoo9q93d9160?&autoplay=true&crosstime=226" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfufqpeoo9q93d91ag?&autoplay=true&crosstime=290" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdfue4un9aqs06npskg?&autoplay=true&crosstime=273" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg0d4un9aqs06npsr0?&autoplay=true&crosstime=455" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bkdg0d4un9aqs06npsr0?&autoplay=true&crosstime=455" }


// #######################################################################
//                        JAVASCRIPT VIDEOS
// #######################################################################

// FUNCTIONAL PROGRAMMING

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqptf1ujavq7bbf2hjg?&autoplay=true&crosstime=477" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqptntnkrnfm4n3pmtg?&autoplay=true&crosstime=412" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqpu2lnkrnfm4n3pmu0?&autoplay=true&crosstime=374" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqpudpujavq7bbf2hk0?&autoplay=true&crosstime=345" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqpul5nkrnfm4n3pmug?&autoplay=true&crosstime=271" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqpv6dnkrnfm4n3pmv0?&autoplay=true&crosstime=799" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqpvhlnkrnfm4n3pmvg?&autoplay=true&crosstime=657" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq02dnkrnfm4n3pn00?&autoplay=true&crosstime=723" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq0glnkrnfm4n3pn0g?&autoplay=true&crosstime=559" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq0ulnkrnfm4n3pn1g?&autoplay=true&crosstime=596" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq17hujavq7bbf2hkg?&autoplay=true&crosstime=360" }
​
11: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq1q5nkrnfm4n3pn20?&autoplay=true&crosstime=829" }
​
12: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq2cdnkrnfm4n3pn30?&autoplay=true&crosstime=700" }
​
13: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq2t1ujavq7bbf2hl0?&autoplay=true&crosstime=668" }
​
14: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq3g1ujavq7bbf2ho0?&autoplay=true&crosstime=396" }
​
15: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq3npujavq7bbf2hog?&autoplay=true&crosstime=402" }
​
16: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/biqq3npujavq7bbf2hog?&autoplay=true&crosstime=402" }


// SCOPE AND CLOSURE

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3auhujavq7bbf35bg?&autoplay=true&crosstime=489" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3b6hujavq7bbf35c0?&autoplay=true&crosstime=409" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3bm1ujavq7bbf35cg?&autoplay=true&crosstime=656" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3bvtnkrnfm4n3qb9g?&autoplay=true&crosstime=446" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3c8lnkrnfm4n3qba0?&autoplay=true&crosstime=372" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3cd9ujavq7bbf35d0?&autoplay=true&crosstime=249" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3cj9ujavq7bbf35dg?&autoplay=true&crosstime=364" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3cplnkrnfm4n3qbag?&autoplay=true&crosstime=238" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3d29ujavq7bbf35e0?&autoplay=true&crosstime=433" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3dahujavq7bbf35eg?&autoplay=true&crosstime=371" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3dfhujavq7bbf35f0?&autoplay=true&crosstime=170" }
​
11: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3dklnkrnfm4n3qbb0?&autoplay=true&crosstime=288" }
​
12: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3dqpujavq7bbf35fg?&autoplay=true&crosstime=479" }
​
13: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3e19ujavq7bbf35g0?&autoplay=true" }
​
14: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bis3e19ujavq7bbf35g0?&autoplay=true" }


// OOP

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1fselnkrnfm4n3sglg?&autoplay=true&crosstime=648" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1fsr1ujavq7bbf59mg?&autoplay=true&crosstime=479" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1ft75nkrnfm4n3sgr0?&autoplay=true&crosstime=258" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1ftilnkrnfm4n3sgrg?&autoplay=true&crosstime=424" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1ftvdnkrnfm4n3sgs0?&autoplay=true&crosstime=221" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1fuhtnkrnfm4n3sgsg?&autoplay=true&crosstime=307" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1furpujavq7bbf59t0?&autoplay=true&crosstime=108" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1fv65nkrnfm4n3sgt0?&autoplay=true&crosstime=278" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1fvclnkrnfm4n3sgtg?&autoplay=true&crosstime=186" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bj1fvclnkrnfm4n3sgtg?&autoplay=true&crosstime=186" }


// OOP IN JAVASCRIPT

Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispptdnkrnfm4n3qmag?&autoplay=true&crosstime=318" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisps25nkrnfm4n3qmc0?&autoplay=true&crosstime=442" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispublnkrnfm4n3qmdg?&autoplay=true&crosstime=660" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispv6tnkrnfm4n3qme0?&autoplay=true&crosstime=396" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispvptnkrnfm4n3qmfg?&autoplay=true&crosstime=355" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq0m9ujavq7bbf3fo0?&autoplay=true&crosstime=751" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq16hujavq7bbf3fog?&autoplay=true&crosstime=260" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq1qdnkrnfm4n3qmjg?&autoplay=true&crosstime=474" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq2h5nkrnfm4n3qml0?&autoplay=true&crosstime=535" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq32lnkrnfm4n3qmlg?&autoplay=true&crosstime=847" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq3d9ujavq7bbf3frg?&autoplay=true&crosstime=622" }
​
11: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq3llnkrnfm4n3qmm0?&autoplay=true&crosstime=266" }
​
12: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq3thujavq7bbf3fs0?&autoplay=true&crosstime=370" }
​
13: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq4hlnkrnfm4n3qmmg?&autoplay=true&crosstime=412" }
​
14: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq4hlnkrnfm4n3qmmg?&autoplay=true&crosstime=412" }


// PROTOTYPE 

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispq8pujavq7bbf3fhg?&autoplay=true&crosstime=218" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisps6hujavq7bbf3fj0?&autoplay=true&crosstime=218" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisptv1ujavq7bbf3fk0?&autoplay=true&crosstime=339" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispv19ujavq7bbf3flg?&autoplay=true&crosstime=596" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispvmhujavq7bbf3fmg?&autoplay=true&crosstime=480" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq0d5nkrnfm4n3qmgg?&autoplay=true&crosstime=533" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq0sdnkrnfm4n3qmhg?&autoplay=true&crosstime=217" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq1dlnkrnfm4n3qmi0?&autoplay=true&crosstime=224" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq1otnkrnfm4n3qmj0?&autoplay=true&crosstime=143" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq1otnkrnfm4n3qmj0?&autoplay=true&crosstime=143" }


// PROTOTYPE INHERITENCE

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitbkmlnkrnfm4n3qttg?&autoplay=true&crosstime=588" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitbl61ujavq7bbf3mk0?&autoplay=true&crosstime=588" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqmkhujavq7bbf3fv0?&autoplay=true&crosstime=318" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqo7lnkrnfm4n3qmrg?&autoplay=true&crosstime=317" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqok1ujavq7bbf3fvg?&autoplay=true&crosstime=380" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqp3hujavq7bbf3g00?&autoplay=true&crosstime=462" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqpdhujavq7bbf3g0g?&autoplay=true&crosstime=273" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqpv5nkrnfm4n3qms0?&autoplay=true&crosstime=665" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisqpv5nkrnfm4n3qms0?&autoplay=true&crosstime=665" }


// ES6

0: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispq9pujavq7bbf3fig?&autoplay=true&crosstime=379" }
​
1: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispq9pujavq7bbf3fig?&autoplay=true&crosstime=379" }
​
2: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bispvh9ujavq7bbf3fm0?&autoplay=true&crosstime=768" }
​
3: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq07pujavq7bbf3fn0?&autoplay=true&crosstime=446" }
​
4: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq0mtnkrnfm4n3qmh0?&autoplay=true&crosstime=370" }
​
5: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq1r1ujavq7bbf3fpg?&autoplay=true&crosstime=821" }
​
6: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq28lnkrnfm4n3qmk0?&autoplay=true&crosstime=320" }
​
7: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bisq2nhujavq7bbf3fqg?&autoplay=true&crosstime=558" }
​
8: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitfur9ujavq7bbf3nmg?&autoplay=true&crosstime=215" }
​
9: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitfva9ujavq7bbf3nn0?&autoplay=true&crosstime=413" }
​
10: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitfvjdnkrnfm4n3qv40?&autoplay=true&crosstime=297" }
​
11: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitfvvdnkrnfm4n3qv4g?&autoplay=true&crosstime=456" }
​
12: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitg0e1ujavq7bbf3nng?&autoplay=true&crosstime=763" }
​
13: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitg2s9ujavq7bbf3nog?&autoplay=true&crosstime=654" }
​
14: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitg4vpujavq7bbf3nqg?&autoplay=true&crosstime=294" }
​
15: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitg6nlnkrnfm4n3qv5g?&autoplay=true&crosstime=258" }
​
16: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitg90hujavq7bbf3nrg?&autoplay=true&crosstime=614" }
​
17: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bivhcvtnkrnfm4n3rj3g?&autoplay=true&crosstime=462" }
​
18: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgbb5nkrnfm4n3qv6g?&autoplay=true&crosstime=577" }
​
19: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgcdpujavq7bbf3nsg?&autoplay=true&crosstime=553" }
​
20: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgd8hujavq7bbf3nt0?&autoplay=true&crosstime=362" }
​
21: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgdk5nkrnfm4n3qv70?&autoplay=true&crosstime=161" }
​
22: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgei5nkrnfm4n3qv7g?&autoplay=true&crosstime=378" }
​
23: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgg4dnkrnfm4n3qv8g?&autoplay=true&crosstime=321" }
​
24: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitggfpujavq7bbf3nu0?&autoplay=true&crosstime=375" }
​
25: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgguhujavq7bbf3nv0?&autoplay=true&crosstime=457" }
​
26: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitghb5nkrnfm4n3qv90?&autoplay=true&crosstime=424" }
​
27: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitghj5nkrnfm4n3qv9g?&autoplay=true&crosstime=277" }
​
28: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitghp5nkrnfm4n3qva0?&autoplay=true&crosstime=159" }
​
29: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgi41ujavq7bbf3nvg?&autoplay=true&crosstime=337" }
​
30: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgi9tnkrnfm4n3qvag?&autoplay=true&crosstime=123" }
​
31: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgj2pujavq7bbf3o00?&autoplay=true&crosstime=764" }
​
32: Object { src: "https://platform.thinkific.com/videoproxy/v1/play/bitgj2pujavq7bbf3o00?&autoplay=true&crosstime=764" }



