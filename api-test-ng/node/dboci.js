// const oracledb = require('oracledb');

// oracledb.getConnection(
//     {
//       user: 'dbo', 
//       password: 'xsqlx',
//       connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.100.245)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = sc42013)))"
//     }, 
//     function(err, connection) {
//       if (err) {error = err; return;}

//     //   if (connection) {
//     //       console.log("connected");    
//     //       }
//     // }
//       const id = '00330';
//     connection.execute("SELECT * FROM sc_mem_m_membership_registered where membership_no = '"+id+"'",function(err, result) {
//         if (err) {error = err; return;}
 
//         // user = result.rows[0][0];
//         error = null;

//         console.log(result.rows);
        
 
//         connection.close(function(err) {
//           if (err) {console.log(err);}
//         });
//       });
//     }
// );

// var http = require('http');
var oracledb = require('oracledb');
// var express = require('express');
// var app = express();
 
// var PORT = process.env.PORT || 3000;
 
// app.listen(PORT, function () {
// console.log('Server running, Express is listening...');
// });
 
// app.get('/', function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.write("No Data Requested, so none is returned");
// res.end();
// });
 
// app.get('/departments', function(req,res){ 
//   handleAllDepartments(req, res);
// } 
//   );
 
// app.get('/departments/:as_memno', function(req,res){
// const as_memno = req.params.as_memno || '%';
// console.log('db response is ready '+as_memno);
// const str:String

// const str = SVGStringList(as_memno);
//   handleDatabaseOperation( req, res, function (request, response, connection) {
//   const selectStatement = "SELECT sc_mem_m_membership_registered.membership_no,sc_mem_m_membership_registered.present_address,   sc_mem_m_membership_registered.date_of_birth,sc_mem_m_membership_registered.approve_date,sc_mem_m_membership_registered.remark,sc_mem_m_share_mem.share_amount,sc_mem_m_share_mem.share_stock,sc_mem_m_share_mem.period_recrieve,sc_mem_m_ucf_member_group_a.member_group_no,sc_mem_m_ucf_member_group_a.member_group_name,sc_mem_m_membership_registered.member_status_code,sc_mem_m_membership_registered.resignation_approve_date,sc_mem_m_share_mem.drop_status,sc_mem_m_membership_registered.total_loan_int,sc_mem_m_membership_registered.present_road,sc_mem_m_membership_registered.present_tambol,sc_mem_m_membership_registered.present_district_code,sc_mem_m_membership_registered.present_province_code,sc_mem_m_membership_registered.present_postcode,sc_mem_m_ucf_member_type.mem_type_desc,sc_mem_m_ucf_member_status.member_status_name,sc_mem_m_membership_registered.id_card,sc_mem_m_share_mem.share_coll_amount,sc_mem_m_membership_registered.mem_type,sc_mem_m_share_mem.keep_from_deposit,sc_mem_m_share_mem.deposit_account_no,sc_mem_m_membership_registered.group_position,sc_mem_m_ucf_member_group_b.member_group_name,sc_mem_m_share_mem.period_compomise,sc_mem_m_ucf_member_group_a.member_group_control,sc_mem_m_member_work_info.salary_id,sc_mem_m_member_work_info.salary_amount,sc_mem_m_member_work_info.position_code,sc_mem_m_membership_registered.bank_acc_no,sc_mem_m_membership_registered.appl_type_code,sc_mem_m_membership_registered.remark2,sc_mem_m_membership_registered.location,sc_mem_m_membership_registered.telephone,sc_mem_m_membership_registered.work_branch,sc_mem_m_member_work_info.level_code FROM sc_mem_m_membership_registered,sc_mem_m_share_mem,sc_mem_m_ucf_member_group sc_mem_m_ucf_member_group_a,sc_mem_m_ucf_member_status,sc_mem_m_ucf_member_type,sc_mem_m_ucf_member_group sc_mem_m_ucf_member_group_b,sc_mem_m_member_work_info WHERE ( sc_mem_m_share_mem.membership_no = sc_mem_m_membership_registered.membership_no ) and ( sc_mem_m_membership_registered.member_group_no = sc_mem_m_ucf_member_group_a.member_group_no ) and ( sc_mem_m_membership_registered.member_status_code = sc_mem_m_ucf_member_status.member_status_code ) and ( sc_mem_m_membership_registered.mem_type = sc_mem_m_ucf_member_type.mem_type_code ) and ( sc_mem_m_ucf_member_group_a.member_group_control = sc_mem_m_ucf_member_group_b.member_group_no ) and ( sc_mem_m_membership_registered.membership_no = sc_mem_m_member_work_info.membership_no )and ( ( sc_mem_m_membership_registered.membership_no = '"+as_memno+") )";
//   connection.execute( selectStatement
//   , function (err, result) {
//   if (err) {
//   console.log('Error in execution of select statement'+err.message);
//   response.writeHead(500, {'Content-Type': 'application/json'});
//   response.end(JSON.stringify({
//   status: 500,
//   message: "Error getting the employees for the department "+as_memno,
//   detailed_message: err.message
//   })
//   );
//   } else {
//   console.log('db response is ready '+result.rows);
//   response.writeHead(200, {'Content-Type': 'application/json'});
//   response.end(JSON.stringify(result));
//   }
//   doRelease(connection);
//   }
//   );
//   });
// });
 

//handleDatabaseOperation
function handleDatabaseOperation( request, response, callback) {
  console.log(request.method + ":" + request.url );
  // response.setHeader('Access-Control-Allow-Origin', '*');
  // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // response.setHeader('Access-Control-Allow-Credentials', true);
  
  // console.log('Handle request: '+request.url);
  // var connectString = process.env.DBAAS_DEFAULT_CONNECT_DESCRIPTOR.replace("PDB1", "demos");
  // console.log('ConnectString :' + connectString);
  oracledb.getConnection(
    {
      user: 'dbo', 
      password: 'xsqlx',
      connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.100.245)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = sc42013)))"
    }, 
    function(err, connection)
      {
      if (err) {
        console.log('Error in acquiring connection ...');
        console.log('Error message '+err.message);
        // Error connecting to DB
          response.writeHead(500, {'Content-Type': 'application/json'});
          response.end(JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message
          }
        ));
      return;
      }
      if (connection) {
          console.log("connected OCI");    
      // console.log('Connection acquired ; go execute ');
      callback(request, response, connection);
        }
      
    }
  );
  return module.exports;
}


 
// function handleAllDepartments(request, response) {
// handleDatabaseOperation( request, response, function (request, response, connection) {
// var departmentName = request.query.name || '%';
 
// var selectStatement = "SELECT * FROM sc_mem_m_membership_registered where membership_no like :departmentName";
// connection.execute( selectStatement,[departmentName],{
// outFormat: oracledb.OBJECT }, 
//   function (err, result) {
//     if (err) {
//       console.log('Error in execution of select statement'+err.message);
//       // console.log(selectStatement);
//       console.log(departmentName);
//       response.writeHead(500, {'Content-Type': 'application/json'});
//       response.end(JSON.stringify({
//         status: 500,
//         message: "Error getting the departments",
//         detailed_message: err.message
//         })
//       );
//     } else {
//     console.log(JSON.stringify(result.rows));
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     response.end(JSON.stringify(result.rows));
//     }
//   doRelease(connection);
//   }   
// );
 
// });
// } 
 
function doRelease(connection)
{
connection.release(
function(err) {
  if (err) {
  console.error(err.message);
  }
});
return module.exports;
}

// module.exports.oci = oci;
module.exports.doRelease = doRelease;
module.exports.oracledb = oracledb;
module.exports.handleDatabaseOperation = handleDatabaseOperation;