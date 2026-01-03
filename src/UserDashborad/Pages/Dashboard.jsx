
    import { FaPercentage } from 'react-icons/fa';
    import { FaCoins, FaTag } from 'react-icons/fa6';
    import { FaPaperPlane, FaWhatsapp, FaXTwitter, FaFacebookF } from "react-icons/fa6";
    import { LuCopy } from "react-icons/lu";
    import { toast } from 'react-toastify';
    import { SlUserFollowing } from 'react-icons/sl';
    import transactionIcon from "../../assets/images/dash-trans-logo.png";
    import dash_last from "../../assets/images/dash-last.png";
import walletIcon from "../../assets/images/wallet.png";
import tokenomicIcon from "../../assets/images/tokenomic.png";
import tokenomicChart from "../../assets/images/tokenomic-chart.png";
import ReactApexChart from "react-apexcharts";

  import referralImg from "../../assets/images/ref_img.png";
import { Chart } from './Chart';




      const Dashboard = () => {

  
  const referralBarData = [
    { month: "Jan", value: 220 },
    { month: "Feb", value: 240 },
    { month: "Mar", value: 350 },
    { month: "Apr", value: 410 },
    { month: "May", value: 230 },
    { month: "Jun", value: 160 },
    { month: "Jul", value: 340 },
    { month: "Aug", value: 360 },
    { month: "Sep", value: 260 },
    { month: "Oct", value: 220 },
    { month: "Nov", value: 410 },
    { month: "Dec", value: 500 },
  ];

  const referralAreaData = [
    { month: "Jan", value: 450 },
    { month: "Feb", value: 280 },
    { month: "Mar", value: 220 },
    { month: "Apr", value: 390 },
    { month: "May", value: 420 },
    { month: "Jun", value: 480 },
    { month: "Jul", value: 330 },
    { month: "Aug", value: 310 },
    { month: "Sep", value: 200 },
    { month: "Oct", value: 190 },
    { month: "Nov", value: 420 },
    { month: "Dec", value: 460 },
  ];


// ================= BAR CHART =================
const referralBarChart = {
  series: [
    {
      name: "Referrals",
      data: referralBarData.map(d => d.value),
    },
  ],
  options: {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        borderRadius: 6,
        borderRadiusApplication: "around", // 👈 top + bottom dono
        columnWidth: "50%",
      },
    },

    // 👇 Gradient color for bars
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal", // 270deg feel ke liye
        shadeIntensity: 0,
        gradientToColors: ["#2659F2"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [2.27, 95.35],
      },
    },

    colors: ["#001D76"],

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      theme: "dark",
      y: {
        formatter: (val) => `$${val}`,
      },
    },

    grid: {
      strokeDashArray: 6,
    },

    xaxis: {
      categories: referralBarData.map(d => d.month),
      labels: {
        style: {
          colors: "#000000",
        },
      },
    },

    yaxis: {
      min: 100,
      max: 500,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#000000",
        },
      },
    },
  },
};



// ================= AREA CHART =================
const referralAreaChart = {
  series: [
    {
      name: "Income",
      data: referralAreaData.map(d => d.value),
    },
  ],
  options: {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0,
      },
    },
    colors: ["#2563EB"],
    dataLabels: { enabled: false },
    grid: {
      strokeDashArray: 6,
    },
   
    xaxis: {
      categories: referralAreaData.map(d => d.month),
      labels: { style: { colors: "#000000" } },
    },
    yaxis: {
      min: 100,
      max: 500,
      tickAmount: 4,
    },
  },
};



        const referralLink = "https://Urban.io/?referrer=0x59d6e3CbF411bbe9a1b184fghf ";

        const handleCopy = () => {
            navigator.clipboard.writeText(referralLink);
            // alert("Referral link copied!");
            toast.success("Referral link copied!", {
                icon: "✅",
                autoClose: 1000,
            });
        };

        return (
            <>
                {/* alrady wraped in main container  */}

                <div className="space-y-10">

                  
                 <div className="neoBorder rounded-[2px]">
              <div className="neoCard flex md:gap-0 gap-4 md:flex-row flex-col-reverse justify-between rounded-[2px] p-6 bg">
                <div className="md:w-[70%]  ">
                   
                   <div className=" neoCard rounded-md py-4 px-5 bg-[#CACACA] ">
  <div className="w-full h-5 bg-[#FFFFFF] rounded-sm overflow-hidden">
<div className="h-full w-[60%] bg-gradient-to-r from-[#2659F2] to-[#001D76]"></div>
  </div>
</div>

                    <div className="w-full flex justify-between mt-3 md:text-base text-[12px] text-[#2659F2] font-medium ">
  <p>Raised - $1.03M</p>
  <p>Current - $515k</p>
</div>



                </div>

                <div className="mx-6 w-[2px] bg-[#575757]" />
                <div className="flex gap-3 items-center md:w-[20%] flex-wrap justify-between text-[#2659F2] text-sm font-bold ">
                    <div className="  ">
                        <p className=" mb-1">Current Price</p>
                        <span className="text-[var(--text-primary)] font-bold">
                            $0.555656
                        </span>
                    </div>
                    <div className="">
                        <p className=" mb-1"> Next Price</p>
                        <span className="text-[var(--text-primary)] font-bold">
                            $0.555656
                        </span>
                    </div>
                </div>
            </div>
</div>




                    <div className="     ">
                        {/* Header */}
                        <div className="mb-5">
                            <h2 className="text-2xl md:text-3xl     text-gradient w-fit  open-sans ">
                                Portfolio Dashboard
                            </h2>
                            <p className="text-[#363636] mt-1 open-sans font-bold">
                                Track your investments and referral rewards in real-time.
                            </p>
                        </div>




                        

                        {/* Cards */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Card 1 */}
  <div className="neoBorder rounded-xl h-full">
    <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md neoCard">
            <FaCoins className="text-[var(--golden-txt1)] text-2xl" />
          </div>
          <h3 className="text-[#2659F2] text-lg open-sans">Urban Coin</h3>
        </div>
        <div className="text-2xl font-bold text-[#363636] mb-2">10 Urban</div>
        <p className="text-[var(--text-secondry)] text-sm open-sans">Estimated value: $0</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="neoBorder rounded-xl h-full">
    <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md neoCard">
            <FaTag className="text-[var(--golden-txt1)] text-2xl" />
          </div>
          <h3 className="text-[#2659F2] text-lg open-sans">Token Price</h3>
        </div>
        <div className="text-2xl font-bold text-[#363636] mb-2">$0.0005</div>
        <p className="text-[var(--text-secondry)] text-sm open-sans">Current price at launch</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="neoBorder rounded-xl h-full">
    <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md neoCard">
            <FaPercentage className="text-[var(--golden-txt1)] text-2xl" />
          </div>
          <h3 className="text-[#2659F2] text-lg open-sans">Earning Percentage</h3>
        </div>
        <div className="text-2xl font-bold text-[#363636] mb-2">5% Bonus</div>
        <p className="text-[var(--text-secondry)] text-sm open-sans">Enhanced rewards active</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="neoBorder rounded-xl h-full">
    <div className="neoCard px-5 py-4 rounded-xl h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-md neoCard">
            <FaPercentage className="text-[var(--golden-txt1)] text-2xl" />
          </div>
          <h3 className="text-[#2659F2] text-lg open-sans">USD Bonus</h3>
        </div>
        <div className="text-2xl font-bold text-[#363636] mb-2">10 Urban</div>
        <p className="text-[var(--text-secondry)] text-sm open-sans">Estimated value:  $0</p>
      </div>
    </div>
  </div>
  </div>

</div>

 {/* transcation table wala part */}




<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

<div className="lg:col-span-2 rounded-xl overflow-hidden">

  <div className="flex items-center justify-between px-5 py-3 bg-[#E8E8E8] mb-4">
    <div className="flex items-center gap-3">
     
      <img
  src={transactionIcon}
  alt="transaction"
  className="w-6 h-6"
/>
      <h3 className="text-lg font-bold text-[#000000] open-sans font-bold">
        My Transaction
      </h3>
    </div>

  
    <button className="text-xl text-gray-600 hover:text-black">
      ⋮
    </button>
  </div>

  {/* TABLE */}
  <div className="neoCard ">
    <div className="overflow-x-auto">
      <table className="min-w-[500px] w-full text-sm">
        <tbody className="text-[#2659F2]">
          {[
            ["01", "5.5 K URB", "0x55d6...e253", "$500", "01/06/2025"],
            ["02", "6.2 K URB", "0x12f4...bbf7", "$750", "01/07/2025"],
            ["03", "7.0 K URB", "0x7a0d...c123", "$600", "01/08/2025"],
            ["04", "8.1 K URB", "0x3bca...dc45", "$820", "01/09/2025"],
            ["05", "9.3 K URB", "0x4f77...c678", "$950", "01/10/2025"],
             ["06", "6.2 K URB", "0x12f4...bbf7", "$750", "01/07/2025"],
            ["07", "7.0 K URB", "0x7a0d...c123", "$600", "01/08/2025"],
            ["08", "8.1 K URB", "0x3bca...dc45", "$820", "01/09/2025"],
          
          ].map((row, i) => (
            <tr key={i} className="border-b last:border-none">
              <td className="py-4 px-5 text-[#000000] font-bold">{row[0]}</td>
              <td className="font-semibold">{row[1]}</td>
              <td className="text-gray-500">{row[2]}</td>
              <td className="font-semibold">{row[3]}</td>
              <td className="text-gray-500">{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

</div>


  {/* RIGHT : WALLET + TOKENOMIC */}
 <div className="flex flex-col gap-6">

 
  <div className="rounded-xl overflow-hidden">
    
  
    <div className="flex items-center justify-between px-5 py-3 bg-[#E8E8E8] mb-4">
      <div className="flex items-center gap-3">
        <img src={walletIcon} alt="wallet" className="w-6 h-6" />
        <h3 className="text-lg font-bold text-[#000000] open-sans">
          Your Wallet
        </h3>
      </div>
      <button className="text-xl text-gray-600 hover:text-black">⋮</button>
    </div>

    
    <div className="">
      <div className="neoCard rounded-b-xl p-5">
        <p className="text-sm text-gray-500 mb-1">Total balance</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-[#363636]">
            $124,442.00
          </span>
          <span className="text-green-500 text-sm bg-green-100 px-2 py-1 rounded">
            +1,423.00
          </span>
        </div>
             
          <div className="border-t pt-4 flex justify-between  items-center">
        <div className="text-sm text-gray-500">
          Exchange
          <div className="font-semibold text-[#2659F2] mt-1">
            1 URB = $24,.00
          </div>
          
          </div>

        </div>
      </div>
    </div>
  </div>

  {/* TOKENOMIC */}
  <div className="rounded-xl overflow-hidden">

   
    <div className="flex items-center justify-between px-5 py-3 bg-[#E8E8E8] mb-4">
      <div className="flex items-center gap-3">
        <img src={tokenomicIcon} alt="tokenomic" className="w-6 h-6" />
        <h3 className="text-lg font-bold text-[#000000] open-sans">
          Tokenomic
        </h3>
      </div>
      <button className="text-xl text-gray-600 hover:text-black">⋮</button>
    </div>

   
    <div className="">
      <div className="neoCard rounded-b-xl p-5">
        <div className="flex justify-evenly items-center">
          <div className="space-y-2 text-sm text-[#2659F2]">
            <p>Exchange</p>
            <p>Exchange</p>
            <p>Exchange</p>
            <p>Exchange</p>
          </div>

          
          <img
  src={tokenomicChart}
  alt="tokenomic chart"
  className="w-28 h-28 object-contain"
/>

        </div>
      </div>  
    </div>

  </div>

</div>
</div>



{/* Chart Wala Part */}


<Chart/>



{/* Sabse niche wala part */}


 
<div className="lg:col-span-2 rounded-xl overflow-hidden">

  <div className="flex items-center justify-between px-5 py-3 bg-[#E8E8E8] ">
    <div className="flex items-center gap-3">
     
      <img
  src={dash_last}
  alt="transaction"
  className="w-6 h-6"
/>
      <h3 className="text-lg  text-[#000000] open-sans font-[800]">
        Start Your Referral Journey
      </h3>
    </div>

  
    <button className="text-xl text-gray-600 hover:text-black">
      ⋮
    </button>
  </div>
  </div>

                  <div className="neoBorder rounded-xl h-full">

                    <div className="neoCard flex  flex-col-reverse lg:flex-row p-6 md:flex justify-between items-center   rounded-xl gap-8">
                        {/* Left Section */}
                        <div className="flex flex-col w-full  items-center md:items-start  ">

                           
                            <p className="text-center md:text-left mb-5 text-xl font-bold
  bg-gradient-to-r from-[#001D76] to-[#2659F2]
  bg-clip-text text-transparent">
  Invite friends and earn 5% commission on their purchases.
  Building wealth together!
</p>


                            {/* Referral Link */}
                            <p className="text mb-2 text-[#363636]  font-bold">
                                Your Referral Link
                            </p>

                           
                            <div className="flex items-center w-full neoCard px-4 py-2 rounded-lg mb-8 shadow-inner">
                                <input
                                    type="text"
                                    readOnly
                                    value={referralLink}
                                    className="bg-transparent text-[#000000] text-[1.1rem]  font-[400] underline w-full outline-none"
                                />
                                <button
                                    onClick={handleCopy}
                                    className="ml-2 p-2 hovNeoCard hover:bg-[var(--golden-txt1)]/10 rounded-md"
                                >
                                    <LuCopy className="text-[var(--golden-txt1)] text-lg" />
                                </button>
                            </div>
                            

                            {/* Social Share */}
                            <div>
                                        <p className="text-center md:text-left mb-5 text-m font-bold
  bg-gradient-to-r from-[#001D76] to-[#2659F2]
  bg-clip-text text-transparent">
 share with friends
</p>

                                <div className="flex gap-4">
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaPaperPlane className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaWhatsapp className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaXTwitter className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                    <button className="hovNeoCard p-3 rounded-[50px] ">
                                        <FaFacebookF className="text-[var(--golden-txt1)] text-2xl" />
                                    </button>
                                </div>
                            </div>

    

                        </div>

                        {/* Right Section: Referral Count */}
                  
                         <div className="  ">
  <img
    src={referralImg}
    alt="Referral"
    className="w-full max-w-[500px] mx-auto "
  />
  </div>
                        
                    </div>
                    </div>

                    
                </div>
            </>
        );
    }

    export default Dashboard;