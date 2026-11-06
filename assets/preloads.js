
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CLkl9rCq.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CwNoZC69.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094-legacy.BFV1R927.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0-legacy.BZexXk2H.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6-legacy.CkE99V3A.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a-legacy.CuSCqDke.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa-legacy.qqTBZCYd.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3-legacy.Dx8Zvukt.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968-legacy.CKNpwnKW.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786-legacy.Bcek8f3g.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987-legacy.DDKFTXTH.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8-legacy.CpBXmpw2.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45-legacy.ID8_4pxF.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d-legacy.CtXmbUXr.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2-legacy._MEX-4t1.js","/cdn/shopifycloud/checkout-web/assets/c1/4618373b-legacy.Cyh1JAM3.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda-legacy.nnMsBZOU.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8-legacy.CYWyQjBU.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78-legacy.Cs6miX_A.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97-legacy.Cmyo9OOd.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749-legacy.CYH6WAKa.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668-legacy.Cif__bVN.js","/cdn/shopifycloud/checkout-web/assets/c1/e7cc4629-legacy.BLrPt1yi.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc-legacy.BcmcLXkc.js","/cdn/shopifycloud/checkout-web/assets/c1/4661cd61-legacy.f44vxnLP.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30-legacy.D1LMUYzZ.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758-legacy.CyJFt8Xa.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f-legacy.DdFuMcQV.js","/cdn/shopifycloud/checkout-web/assets/c1/08e2c58d-legacy.C22AQg3n.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753-legacy.DlnPo9JN.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab-legacy.BIfuPo-f.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f-legacy.CUCRDLty.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5-legacy.DuQbEOUQ.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46-legacy.QrBFcmbQ.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337-legacy.Db-m8UkO.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7-legacy.CQOWNU7-.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3-legacy.DnOO1pRZ.js","/cdn/shopifycloud/checkout-web/assets/c1/8da28279-legacy.DPgT2gpH.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81-legacy.BrVxRqoK.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54-legacy.arWLqk8a.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f-legacy.uTrRPex1.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79-legacy.DI0kP6KF.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548-legacy.BDbj0ByP.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304-legacy.DnhdGSNp.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d-legacy.CgDd67av.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576-legacy.Df9Y92uL.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b-legacy.CmF3TBbZ.js","/cdn/shopifycloud/checkout-web/assets/c1/4e32eceb-legacy.CrHEUX54.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33-legacy.B6GL1Evm.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a-legacy.ChjPAjUG.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25-legacy.CxYoSrji.js","/cdn/shopifycloud/checkout-web/assets/c1/890c145f-legacy.DmMjaURw.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9-legacy.D6A-QdCd.js","/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0-legacy.DzYe_P07.js","/cdn/shopifycloud/checkout-web/assets/c1/56132226-legacy.fuEOsM8E.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0-legacy.Cg-yjYm7.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c-legacy.DKIlf2Ec.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6-legacy.RNAbygWH.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba-legacy.BDgEghdg.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf-legacy.DrFaCyKO.js","/cdn/shopifycloud/checkout-web/assets/c1/0d85278a-legacy.BNvv2QFN.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e-legacy.DR6uT6Yt.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860-legacy.Dx6qphaa.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6-legacy.DTVn-IoR.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289-legacy.BDHAoh4D.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e-legacy.Pv11Hv37.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d-legacy.BpgBy4Fj.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8-legacy.CDUQOHnz.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71-legacy.GX30R2EO.js","/cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6-legacy.DNXiRqT_.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656-legacy.D70_pg-_.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d-legacy.B6xz9fXM.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958-legacy.CTE8LrGG.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5-legacy.Dt9qMNE4.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c-legacy.DVpm4nEz.js","/cdn/shopifycloud/checkout-web/assets/c1/1befea5c-legacy.SLGjU0E8.js","/cdn/shopifycloud/checkout-web/assets/c1/ff52cf6d-legacy.hQgw5_c2.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557-legacy.DnzgFSHx.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee-legacy.hiWY5dnT.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646-legacy.CoMDgjb3.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81-legacy.CUnf9IcF.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291-legacy.DQqP1ZBr.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1-legacy.7y_RUBa9.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74-legacy.DrBD6Im2.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6-legacy.BIJLOxUp.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e-legacy.L41aud4j.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132-legacy.CAQsyUL2.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836-legacy.Bl1dsr_U.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e-legacy.DFTTB8LI.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded-legacy.tKCaa-ub.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116-legacy.B1zeDcrp.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3-legacy.Cm1THugZ.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36-legacy.DVjyYiwj.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5-legacy.DJmkE6mg.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00-legacy.D5PTgZIV.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff-legacy.B7CvHWzf.js","/cdn/shopifycloud/checkout-web/assets/c1/38cb0284-legacy.DginWj1f.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128-legacy.t6WjdVT1.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226-legacy.Dhag2Ma7.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b-legacy.DyAcOafz.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81-legacy.DEkqN6v2.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507-legacy.CokU_qaN.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b-legacy.CTjqGLtb.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b-legacy.n6ftDVDO.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08-legacy.CZvqkxpn.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2-legacy.D0i14zW1.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2-legacy.ChA26dXN.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9-legacy.Blsr9fZ9.js","/cdn/shopifycloud/checkout-web/assets/c1/9961965b-legacy.C9kjoBRe.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930-legacy.0iZWJLyL.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd-legacy.CxCJbSVs.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74-legacy.CCCtsMhq.js","/cdn/shopifycloud/checkout-web/assets/c1/b068efe0-legacy.CpHjG5Ar.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b-legacy.BwzID1Pk.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96-legacy.-p7jRPeR.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c-legacy.Db48YpjZ.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc-legacy.vxu8Ha76.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20-legacy.YffPEdD3.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c-legacy.DCkoKV85.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18-legacy.CyyqUm8o.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8-legacy.BZ_FdyZM.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf-legacy.BBeC_Uwj.js","/cdn/shopifycloud/checkout-web/assets/c1/1493337c-legacy.DyJfb1HR.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5-legacy.CPMutgWY.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a-legacy.J-5vX3Q3.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320-legacy.ujIdvAqv.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f-legacy.9363Zyiw.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb-legacy.CoJBofbd.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664-legacy.BZsuhDZ1.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466-legacy.BvrxPfFC.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3-legacy.ArYS0QP9.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02-legacy.iwbUcCsL.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416-legacy.BYM5VL3B.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a-legacy.2uGMxEQD.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9-legacy.C2bVIQCl.js","/cdn/shopifycloud/checkout-web/assets/c1/35fb5eb6-legacy.D35NS_VR.js","/cdn/shopifycloud/checkout-web/assets/c1/05f561d4-legacy.DzeCILs4.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d-legacy.DSYxSx-o.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  