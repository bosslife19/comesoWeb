import  { useState } from "react";
import { motion } from "framer-motion";
 // import Pagination from "../../Pagination/Paginations";
  
import Pagination from "../Pagination/Paginations";
  
const PAGE_SIZE = 10;
 
const DashboardList  = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");

  const handleChange = (event) => {
    setSelectedAction(event.target.value);
    console.log("Selected action:", event.target.value);
  };
  
  const tableData = [
    {
      
      Timestamp: "09/08/24, 12:0018pm",
       sender:"mako",
       phone: "0810031976",
      Amount: "$2,000",
      Status: "complete",
     
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
       sender:"mako",
      phone: "0810031976",
      Amount: "$1,500",
      Status: "pending",
     
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
       sender:"mako",
      phone: "08100319760",
      Amount: "$837639",
      Status: "complete",
     
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
       sender:"mako",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "Rejected",
     
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
       sender:"mako",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
     
      
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
       sender:"mako",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      Timestamp: "09/08/24, 12:0018pm",
      phone: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    
    
    
  ];

  const filteredData = tableData.filter((row) => {
    const matchesQuery = row.Amount.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || row.Status.toLowerCase() === filterStatus.toLowerCase();
    return matchesQuery && matchesStatus;
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  

  const rowAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
    }),
  };
 
  

  return (
    <div className=" w-full md:p-4 rounded-lg  mt-[20px]">
    <div className=" md:flex justify-between items-center mb-2 mt-3 font-sans">
  {/* Left Section: Title and Tag */}
  <div className="w-full flex items-center justify-between gap-3     px-2">
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-[17px] md:text-[22px] text-[#49454FCC] leading-[27.72px] font-[500] font-inter  "
>
  Recent Transactions
</motion.h2>
 <span className="text-[#49454FCC] font-poppins text-[12px] md:text-[16px] leading-[23.44px]">View All</span>
</div>

{/* Right Section: Search Bar and Filter Button */}
 
</div>


      {/* Responsive Table Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto  scroll-container border rounded-[15px]"
      >
        <table className="min-w-full  bg-white shadow-md border border-[#F9FAFB] rounded-lg">
          <thead>
          <tr className="bg-[#fff] ">
                   
                   <th className="px-2 md:px-4 py-[10px] md:py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Timestamp
                   </th>
                  
                   <th className="px-2 md:px-4 py-[10px] md:py-[20px] text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Sender
                   </th>
                   <th className="px-2 md:px-4 py-[10px] md:py-[20px] text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Phone Number
                   </th>
                   <th className="px-2 md:px-4 py-[10px] md:py-[20px] text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Amount
                   </th>
                   <th className="px-5 md:px-8 py-[10px] md:py-[20px] md:text-end text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Status
                   </th>
                   
                    
                 </tr>
          </thead>
          <motion.tbody
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
            {paginatedData.map((row, index) => (
              <motion.tr
                key={index}
                variants={rowAnimation}
                initial="hidden"
                animate="visible"
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : " bg-white" 
                } border-b hover:bg-gray-50`}
            >
                 <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Timestamp}
                </td>
                 <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.sender}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.phone}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
                  {row.Amount}               
                  </td>
                  <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-end text-[#384250]">
                  <span
                    className={`${
                      row.Status === "complete"
                        ? "text-[#3ECF8E]"
                        : row.Status === "pending"
                        ? "text-[#FFC13C]"
                        : row.Status === "Rejected"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    } text-[12px] text-[#384250] font-bold px-[10px] py-[5px] rounded-[50px]`}
                  >
                    {row.Status}
                  </span>
                </td>
                  
              </motion.tr>
            ))}
         </motion.tbody>
        </table>
      </motion.div>
      
      <Pagination
        count={tableData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={PAGE_SIZE}
      />
         

 
    </div>
  );
};

export default DashboardList;