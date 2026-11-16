    /* =======================================================
   ICONS — simple inline SVGs standing in for product photos
   ======================================================= */
    const ICONS = {
      // PP Compression Fittings PN16
      1: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression Coupling/1.png" alt="">`,
      2: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression Reducing Coupling/1.png" alt="">`,
      3: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression CAP/1.png" alt="">`,
      4: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression Male Threaded Adaptor/1.png" alt="">`,
      5: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression Female Threaded Adaptor/1.png" alt="">`,
      6: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression 90 Elbow/1.png" alt="">`,
      7: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression Male Thread Elbow/1.png" alt="">`,
      8: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression Female Threaded Elbow/1.png" alt="">`,
      9: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression 90 Male Threaded Tee/1.png" alt="">`,
      10: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression 90 Female Threaded Tee/1.png" alt="">`,
      11: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression 90 Equal Tee/1.png" alt="">`,
      12: `<img src="assets/images/products/PP Compression Fittings PN16/Polypropylene Compression 90 Reducer Threaded Tee/2.png" alt="">`,
      // PP Clamp Saddle
      13: `<img src="assets/images/products/PP Clamp Saddle/Polypropylene Clamp Saddle One Hole/1.png" alt="">`,
      14: `<img src="assets/images/products/PP Clamp Saddle/Polypropylene Clamp Saddle Two Holes/1.png" alt="">`,
      // light P.P barbed fittings
      15: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Male Threaded Elbow/1.png" alt="">`,
      16: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Starter for tube(Grommet)/1.png" alt="">`,
      17: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Starter for tube/1.png" alt="">`,
      18: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Equal Tee/1.png" alt="">`,
      19: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Male Threaded Tee/1.png" alt="">`,
      20: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Male Threaded straight Adaptor/1.png" alt="">`,
      21: `<img src="assets/images/products/PP Barbed Fittings & Valves/Barbed Equal Elbow/1.png" alt="">`,
      22: `<img src="assets/images/products/PP Barbed Fittings & Valves/PP Located stick for polyethylene dripper pipes/1.png" alt="">`,
      23: `<img src="assets/images/products/PP Barbed Fittings & Valves/PP MINI BARBED VALES/1.png" alt="">`,
      24: `<img src="assets/images/products/PP Barbed Fittings & Valves/PP MINI MALE THREAD VALVES/1.png" alt="">`,
      // P.P. Steel Coated
      25: `<img src="assets/images/products/PP Coated Steel Flange/POLYPRPLENE PP COATED STEEL FLANGE/1.png" alt="">`,
      // Valve
      26: `<img src="assets/images/new products/DIN3352-F4 Non-rising stem Resilient Gate Valve (brass Nut Type)/1.png" alt="">`,
      27: `<img src="assets/images/new products/DIN3352-F5 Non-rising stem Resilient Gate Valve (brass Nut Type)/1.png" alt="">`,
      28: `<img src="assets/images/new products/DIN3352-F5 Non-rising stem Resilient Gate Valve (brass Nut Type)/1.png" alt="">`,
      29: `<img src="assets/images/new products/BS5163 rising Stem Resilient Seated Gate Valve/1.png" alt="">`,
      30: `<img src="assets/images/new products/Socket End Non-rising Stem Resilient Seated Gate Valve For PVC Pipe/1.png" alt="">`,
      31: `<img src="assets/images/new products/Socket End Non-rising Stem Resilient Seated Gate Valve For Ductile Iron Pipe/1.png" alt="">`,
      32: `<img src="assets/images/new products/Flanged Double Eccentric Butterfly Valve/1.png" alt="">`,
      33: `<img src="assets/images/new products/Double Balls Exhaust Valve/1.png" alt="">`,
      34: `<img src="assets/images/new products/Quick Exhaust Valve/1.png" alt="">`,
      35: `<img src="assets/images/new products/Swing Type Check Valve Rubber Disc/1.png" alt="">`,
      36: `<img src="assets/images/new products/Y- Stariner/1.png" alt="">`,
      37: `<img src="assets/images/new products/100X Solenoid Distance Control Ball Float Valve/1.png" alt="">`,
      38: `<img src="assets/images/new products/800X Differential Bypass Balance Valves/1.png" alt="">`,
      39: `<img src="assets/images/new products/Universal Coupling (Wide range)/1.png" alt="">`,
      40: `<img src="assets/images/new products/Universal Flange Adaptor (Wide range)/1.png" alt="">`,
      41: `<img src="assets/images/new products/Dismantling Joint Class PN16-PN25/1.png" alt="">`,
      42: `<img src="assets/images/new products/Dismantling Joint Class PN40/1.png" alt="">`,
      43: `<img src="assets/images/new products/Ductile iron saddle for PVC PE Pipe/1.png" alt="">`,
      44: `<img src="assets/images/new products/Universal saddle with outlet thread PVC PE Pipe/1.png" alt="">`,
      45: `<img src="assets/images/new products/saddle Clamp for Ductile iron Pipes/1.png" alt="">`,
      46: `<img src="assets/images/new products/Restrained flange adaptor for HDPE PVC Pipes/1.png" alt="">`,
      47: `<img src="assets/images/new products/Coupling/1.png" alt="">`,
      48: `<img src="assets/images/new products/Tensile Resistant Flange Adaptors for HDPE PVC Pipes/1.png" alt="">`,
      49: `<img src="assets/images/new products/Flexible Rubber Joint (Single Sphere)/1.png" alt="">`,
      50: `<img src="assets/images/new products/Gasket/1.png" alt="">`,
      51: `<img src="assets/images/new products/LUG/1.png" alt="">`,
      52: `<img src="assets/images/new products/PRESSURE (BAR)/1.png" alt="">`,

      // HDPE - butt fusion
      53: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Flange adaptor (Stub End)/1.png" alt="">`,
      54: `<img src="assets/images/products/HDPE/Polypropylene P.P. Coated Steel Flange/1.png" alt="">`,
      55: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Equal Tee/1.png" alt="">`,
      56: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Reducing Tee/1.png" alt="">`,
      57: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Equal 90 Elbow/1.png" alt="">`,
      58: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Equal 45 Elbow/1.png" alt="">`,
      59: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Reducer/1.png" alt="">`,
      60: `<img src="assets/images/products/HDPE/HDPE Butt Fusion End Cap/1.png" alt="">`,
      61: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Male Adapter/1.png" alt="">`,
      62: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Female Adapter/1.png" alt="">`,
      63: `<img src="assets/images/products/HDPE/HDPE Compression Male Adapter/1.png" alt="">`,
      64: `<img src="assets/images/products/HDPE/HDPE Compression Male Elbow/1.png" alt="">`,

      // electro fusion
      65: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Flange Adapter/1.png" alt="">`,
      66: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Coupler/1.png" alt="">`,
      67: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Equal Tee/1.png" alt="">`,
      68: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Reducer Tee/1.png" alt="">`,
      69: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Equal 90 elbow/1.png" alt="">`,
      70: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Equal 45 Elbow/1.png" alt="">`,
      71: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Reducer/1.png" alt="">`,
      72: `<img src="assets/images/products/HDPE/HDPE Electro Fusion End Cap/1.png" alt="">`,
      73: `<img src="assets/images/products/HDPE/HDPE Butt Fusion Cross Fitting/1.png" alt="">`,
      74: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Branch Saddle/1.png" alt="">`,
      75: `<img src="assets/images/products/HDPE/HDPE Electro Fusion Tapping Tee/1.png" alt="">`,
      76: `<img src="assets/images/products/HDPE/Butt Fusion welding Machine/1.png" alt="">`,
      77: `<img src="assets/images/products/HDPE/Electro Fusion Welding Machine/1.png" alt="">`,
    };
    function icon(name) { return ICONS[name] || ICONS.cap; }

    /* =======================================================
       MOCK "DATABASE" — this stands in for a server response
       ======================================================= */
    const CATEGORIES = [
      { name: "Ductile valves & Fittings", subs: ["Fittings", "Valves", "Water meter", "Stainless steel fittings"] },
      { name: "HDPE P.E. 100 Fittings", subs: ["Butt fusion", "Electro fusion"] },
      { name: "P.P. Fittings", subs: ["Compression fittings", "light P.P barbed fittings", "Clamp Saddle"] },
      { name: "HDPE welding machine", subs: ["Butt fusion", "Electro fusion"] },
      { name: "Flange", subs: ["P.P. Coated Steel"] },
      { name: "Water & Irrigation Fittings", subs: ["Sprinklers", "Drippers"] }
    ];

    const PRODUCTS = [
      // PP Compression Fittings PN16
      { id: 1, title: "Polypropylene Compression Coupling", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "1" },
      { id: 2, title: "Polypropylene Compression Reducing Coupling", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "2" },
      { id: 3, title: "Polypropylene Compression CAP", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "3" },
      { id: 4, title: "Polypropylene Compression Male Threaded Adaptor", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "4" },
      { id: 5, title: "Polypropylene Compression Female Threaded Adaptor", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "5" },
      { id: 6, title: "Polypropylene Compression 90° Elbow", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "6" },
      { id: 7, title: "Polypropylene Compression Male Thread Elbow", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "7" },
      { id: 8, title: "Polypropylene Compression Female Threaded Elbow", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "8" },
      { id: 9, title: "Polypropylene Compression 90° Male Threaded Tee", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "9" },
      { id: 10, title: "Polypropylene Compression 90° Female Threaded Tee", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "10" },
      { id: 11, title: "Polypropylene Compression 90° Equal Tee", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "11" },
      { id: 12, title: "Polypropylene Compression 90° Reducer Threaded Tee", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "12" },
      // PP Clamp Saddle
      { id: 13, title: "Polypropylene Clamp Saddle One Hole", tag: "Clamp Saddle", category: "P.P. Fittings", sub: "Clamp Saddle", icon: "13" },
      { id: 14, title: "Polypropylene Clamp Saddle Two Holes", tag: "Clamp Saddle", category: "P.P. Fittings", sub: "Clamp Saddle", icon: "14" },
      // light P.P barbed fittings
      { id: 15, title: "Barbed Male Threaded Elbow", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "15" },
      { id: 16, title: "Barbed Starter for tube(Grommet)", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "16" },
      { id: 17, title: "Barbed Starter for tube", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "17" },
      { id: 18, title: "Barbed Equal Tee", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "18" },
      { id: 19, title: "Barbed Male Threaded Tee", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "19" },
      { id: 20, title: "Barbed Male Threaded straight Adaptor", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "20" },
      { id: 21, title: "Barbed Equal Elbow", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "21" },
      { id: 22, title: "PP Located stick for polyethylene dripper pipes", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "22" },
      { id: 23, title: "PP MINI BARBED VALES", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "23" },
      { id: 24, title: "PP MINI MALE THREAD VALVES", tag: "light P.P barbed fittings", category: "P.P. Fittings", sub: "light P.P barbed fittings", icon: "24" },
      // P.P. Coated Steel
      { id: 25, title: "POLYPRPLENE PP COATED STEEL FLANGE", tag: "P.P. Coated Steel", category: "Flange", sub: "P.P. Coated Steel", icon: "25" },
      // Valve
      { id: 26, title: "DIN3352-F4 Non-rising stem Resilient Gate Valve (brass Nut Type)", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "26" },
      { id: 27, title: "DIN3352-F5 Non-rising stem Resilient Gate Valve (brass Nut Type)", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "27" },
      { id: 28, title: "BS5163 Type a Non-rising Stem Resilient Seated Gate Valve", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "28" },
      { id: 29, title: "BS5163 rising Stem Resilient Seated Gate Valve", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "29" },
      { id: 30, title: "Socket End Non-rising Stem Resilient Seated Gate Valve For PVC Pipe", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "30" },
      { id: 31, title: "Socket End Non-rising Stem Resilient Seated Gate Valve For Ductile Iron Pipe", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "31" },
      { id: 32, title: "Flanged Double Eccentric Butterfly Valve", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "32" },
      { id: 33, title: "Double Balls Exhaust Valve", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "33" },
      { id: 34, title: "Quick Exhaust Valve", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "34" },
      { id: 35, title: "Swing Type Check Valve Rubber Disc", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "35" },
      { id: 36, title: "Y- Stariner", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "36" },
      { id: 37, title: "100X Solenoid Distance Control Ball Float Valve", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "37" },
      { id: 38, title: "800X Differential Bypass Balance Valves", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "38" },
      { id: 39, title: "Universal Coupling (Wide range)", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "39" },
      { id: 40, title: "Universal Flange Adaptor (Wide range)", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "40" },
      { id: 41, title: "Dismantling Joint Class PN16-PN25", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "41" },
      { id: 42, title: "Dismantling Joint Class PN40", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "42" },
      { id: 43, title: "Ductile iron saddle for PVC PE Pipe", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "43" },
      { id: 44, title: "Universal saddle with outlet thread PVC PE Pipe", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "44" },
      { id: 45, title: "saddle Clamp for Ductile iron Pipes", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "45" },
      { id: 46, title: "Restrained flange adaptor for HDPE/PVC Pipes", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "46" },
      { id: 47, title: "Coupling", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "47" },
      { id: 48, title: "Tensile Resistant Flange Adaptors for HDPE/PVC Pipes", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "48" },
      { id: 49, title: "Flexible Rubber Joint (Single Sphere)", tag: "Fittings", category: "Ductile valves & Fittings", sub: "Fittings", icon: "49" },

      { id: 50, title: "Gasket", tag: "Stainless steel fittings", category: "Ductile valves & Fittings", sub: "Stainless steel fittings", icon: "50" },
      { id: 51, title: "LUG", tag: "Stainless steel fittings", category: "Ductile valves & Fittings", sub: "Stainless steel fittings", icon: "51" },
      { id: 52, title: "PRESSURE (BAR)", tag: "Stainless steel fittings", category: "Ductile valves & Fittings", sub: "Stainless steel fittings", icon: "52" },

      // HDPE 
      // butt fusion 

      { id: 53, title: "HDPE Butt Fusion Flange adaptor (Stub End)", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "53" },
      { id: 54, title: "Polypropylene P.P. Coated Steel Flange", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "54" },
      { id: 55, title: "HDPE Butt Fusion Equal Tee", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "55" },
      { id: 56, title: "HDPE Butt Fusion Reducing Tee", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "56" },
      { id: 57, title: "HDPE Butt Fusion Equal 90 Elbow", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "57" },
      { id: 58, title: "HDPE Butt Fusion Equal 45 Elbow", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "58" },
      { id: 59, title: "HDPE Butt Fusion Reducer", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "59" },
      { id: 60, title: "HDPE Butt Fusion End Cap", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "60" },
      { id: 61, title: "HDPE Butt Fusion Male Adapter", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "61" },
      { id: 62, title: "HDPE Butt Fusion Female Adapter", tag: "Butt fusion", category: "HDPE P.E. 100 Fittings", sub: "Butt fusion", icon: "62" },
      { id: 63, title: "HDPE Compression Male Adapter", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "63" },
      { id: 64, title: "HDPE Compression Male Elbow", tag: "Compression fittings", category: "P.P. Fittings", sub: "Compression fittings", icon: "64" },

      // electro fusion
      { id: 65, title: "HDPE Electro Fusion Flange Adapter", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "65" },
      { id: 66, title: "HDPE Electro Fusion Coupler", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "66" },
      { id: 67, title: "HDPE Electro Fusion Equal Tee", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "67" },
      { id: 68, title: "HDPE Electro Fusion Reducer Tee", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "68" },
      { id: 69, title: "HDPE Electro Fusion Equal 90 elbow", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "69" },
      { id: 70, title: "HDPE Electro Fusion Equal 45 Elbow", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "70" },
      { id: 71, title: "HDPE Electro Fusion Reducer", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "71" },
      { id: 72, title: "HDPE Electro Fusion End Cap", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "72" },
      { id: 73, title: "HDPE Butt Fusion Cross Fitting", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "73" },
      { id: 74, title: "HDPE Electro Fusion Branch Saddle", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "74" },
      { id: 75, title: "HDPE Electro Fusion Tapping Tee", tag: "Electro fusion", category: "HDPE P.E. 100 Fittings", sub: "Electro fusion", icon: "75" },
      
      // HDPE welding machine
      { id: 76, title: "Butt Fusion welding Machine", tag: "Butt fusion", category: "HDPE welding machine", sub: "Butt fusion", icon: "76" },
      { id: 77, title: "Electro Fusion Welding Machine", tag: "Electro fusion", category: "HDPE welding machine", sub: "Electro fusion", icon: "77" },
    ];

    const RECENT_ITEM_IDS = [7, 8, 9]; // Front lighting, Thermal fan, Cold air system

    /* =======================================================
       FAKE AJAX LAYER
       Wrapping data access in a Promise + delay simulates a
       real XHR/fetch call to a backend, without page reloads.
       ======================================================= */
    function fetchProducts({ category = null, sub = null, query = "" } = {}) {
      return new Promise(resolve => {
        setTimeout(() => {
          let results = PRODUCTS.slice();

          if (sub) {
            results = results.filter(p => p.sub === sub && p.category === category);
          } else if (category) {
            results = results.filter(p => p.category === category);
          }

          if (query.trim()) {
            const q = query.trim().toLowerCase();
            results = results.filter(p =>
              p.title.toLowerCase().includes(q) ||
              p.tag.toLowerCase().includes(q) ||
              p.category.toLowerCase().includes(q)
            );
          }

          resolve(results);
        }, 260); // simulated network latency
      });
    }

    /* =======================================================
       APP STATE
       ======================================================= */
    const state = {
      category: null,
      sub: null,
      query: "",
      page: 1,
      perPage: 12
    };

    /* =======================================================
       RENDER: SIDEBAR CATEGORIES
       ======================================================= */
    const categoryListEl = document.getElementById('categoryList');

    function renderCategories() {
      categoryListEl.innerHTML = `
    <li class="cat-item cat-item-all">
      <button class="cat-head cat-all" data-cat="__all__">
        <span class="cat-caret" style="visibility:hidden">▶</span>All Products
      </button>
    </li>
  ` + CATEGORIES.map((cat, i) => `
    <li class="cat-item" data-index="${i}">
      <button class="cat-head" data-cat="${cat.name}">
        <span class="cat-caret">▶</span>${cat.name}
      </button>
      <ul class="sub-list">
        ${cat.subs.map(s => `<li><a href="#" data-cat="${cat.name}" data-sub="${s}">${s}</a></li>`).join('')}
      </ul>
    </li>
  `).join('');
    }
    renderCategories();

    categoryListEl.addEventListener('click', (e) => {
      const head = e.target.closest('.cat-head');
      const subLink = e.target.closest('.sub-list a');

      if (subLink) {
        e.preventDefault();
        state.category = subLink.dataset.cat;
        state.sub = subLink.dataset.sub;
        state.query = "";
        state.page = 1;
        document.getElementById('searchInput').value = "";
        markActiveCategory();
        load();
        return;
      }

      if (head) {
        if (head.dataset.cat === "__all__") {
          document.querySelectorAll('.cat-item.open').forEach(el => el.classList.remove('open'));
          state.category = null;
          state.sub = null;
          state.query = "";
          state.page = 1;
          document.getElementById('searchInput').value = "";
          markActiveCategory();
          load();
          return;
        }

        const li = head.closest('.cat-item');
        const wasOpen = li.classList.contains('open');
        document.querySelectorAll('.cat-item.open').forEach(el => el !== li && el.classList.remove('open'));
        li.classList.toggle('open', !wasOpen);

        // clicking the category label itself also filters to that whole group
        state.category = head.dataset.cat;
        state.sub = null;
        state.query = "";
        state.page = 1;
        document.getElementById('searchInput').value = "";
        markActiveCategory();
        load();
      }
    });

    function markActiveCategory() {
      document.querySelectorAll('.cat-head').forEach(b =>
        b.classList.toggle('active', b.dataset.cat === state.category && !state.sub));
      document.querySelectorAll('.sub-list a').forEach(a =>
        a.classList.toggle('active', a.dataset.sub === state.sub && a.dataset.cat === state.category));

      const allBtn = document.querySelector('.cat-all');
      if (allBtn) allBtn.classList.toggle('active', !state.category && !state.sub);
    }

    /* =======================================================
       RENDER: RECENT ITEMS
       ======================================================= */
    const recentListEl = document.getElementById('recentList');

    function renderRecentItems() {
      recentListEl.innerHTML = RECENT_ITEM_IDS.map(id => {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return '';
        return `
  <li class="recent-item" data-id="${p.id}">
    <span class="recent-thumb">${icon(p.icon)}</span>
    <span class="recent-name">${p.title.split(' ').slice(0, 2).join(' ').toUpperCase()}</span>
  </li>`;
      }).join('');
    }
    renderRecentItems();

    recentListEl.addEventListener('click', (e) => {
      const item = e.target.closest('.recent-item');
      if (!item) return;
      const p = PRODUCTS.find(x => x.id === Number(item.dataset.id));
      if (!p) return;
      state.category = null;
      state.sub = null;
      state.query = p.title;
      state.page = 1;
      document.getElementById('searchInput').value = p.title;
      markActiveCategory();
      load();
    });

    /* =======================================================
       RENDER: SEARCH
       ======================================================= */
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      state.query = searchInput.value;
      state.category = null;
      state.sub = null;
      state.page = 1;
      markActiveCategory();
      load();
    });

    // live search as you type (debounced) — still no page reload
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.query = searchInput.value;
        state.category = null;
        state.sub = null;
        state.page = 1;
        markActiveCategory();
        load();
      }, 350);
    });

    /* =======================================================
       RENDER: ACTIVE FILTER CHIPS
       ======================================================= */
    const activeFiltersEl = document.getElementById('activeFilters');
    const heading = document.getElementById('pageHeading');

    function renderFilterChips() {
      const chips = [];
      if (state.sub) chips.push({ label: state.sub, clear: () => { state.sub = null; state.category = null; } });
      else if (state.category) chips.push({ label: state.category, clear: () => { state.category = null; } });
      if (state.query) chips.push({ label: `"${state.query}"`, clear: () => { state.query = ""; searchInput.value = ""; } });

      activeFiltersEl.innerHTML = chips.map((c, i) => `
    <span class="chip" data-i="${i}">${c.label}<button aria-label="Remove filter">×</button></span>
  `).join('');

      activeFiltersEl.querySelectorAll('.chip button').forEach((btn, i) => {
        btn.addEventListener('click', () => {
          chips[i].clear();
          state.page = 1;
          markActiveCategory();
          load();
        });
      });

      heading.textContent = state.sub || state.category || (state.query ? "Search Results" : "All Products");
    }

    /* =======================================================
       RENDER: PRODUCT GRID + PAGINATION
       ======================================================= */
    const gridEl = document.getElementById('grid');
    const gridWrapEl = document.getElementById('gridWrap');
    const paginationEl = document.getElementById('pagination');
    const resultsInfoEl = document.getElementById('resultsInfo');

    function renderGrid(items) {
      if (!items.length) {
        gridEl.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <strong>No products found</strong>
        Try a different search term or browse another category.
      </div>`;
        resultsInfoEl.textContent = "";
        paginationEl.innerHTML = "";
        return;
      }

      const totalPages = Math.max(1, Math.ceil(items.length / state.perPage));
      state.page = Math.min(state.page, totalPages);
      const start = (state.page - 1) * state.perPage;
      const pageItems = items.slice(start, start + state.perPage);

      gridEl.innerHTML = pageItems.map(p => `
    <a class="card" href="product-detail.html?id=${p.id}">
      <div class="card-media">
        ${icon(p.icon)}
        <div class="card-overlay"><span>Item Details</span></div>
      </div>
      <div class="card-body">
        <div class="card-tag">${p.tag}</div>
        <div class="card-title">${p.title}</div>
      </div>
    </a>
  `).join('');

      resultsInfoEl.textContent = `Showing ${start + 1}–${Math.min(start + pageItems.length, items.length)} of ${items.length} product${items.length !== 1 ? 's' : ''}`;

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      if (totalPages <= 1) { paginationEl.innerHTML = ""; return; }

      let html = `<button data-page="prev" ${state.page === 1 ? 'disabled' : ''}>‹</button>`;

      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - state.page) <= 1) pages.push(i);
        else if (pages[pages.length - 1] !== '...') pages.push('...');
      }

      pages.forEach(p => {
        if (p === '...') html += `<span class="dots">…</span>`;
        else html += `<button data-page="${p}" class="${p === state.page ? 'active' : ''}">${p}</button>`;
      });

      html += `<button data-page="next" ${state.page === totalPages ? 'disabled' : ''}>›</button>`;
      paginationEl.innerHTML = html;
    }

    paginationEl.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn || btn.disabled) return;
      const val = btn.dataset.page;
      if (val === 'prev') state.page -= 1;
      else if (val === 'next') state.page += 1;
      else state.page = Number(val);
      renderGrid(currentItems);
      window.scrollTo({ top: gridWrapEl.offsetTop - 20, behavior: 'smooth' });
    });

    /* =======================================================
       LOAD (the "AJAX" request)
       ======================================================= */
    let currentItems = [];

    async function load() {
      gridWrapEl.classList.add('is-loading');
      gridEl.classList.add('loading');
      renderFilterChips();

      const items = await fetchProducts({
        category: state.category,
        sub: state.sub,
        query: state.query
      });

      currentItems = items;
      renderGrid(items);

      gridWrapEl.classList.remove('is-loading');
      gridEl.classList.remove('loading');
    }

    // initial load
    load();


