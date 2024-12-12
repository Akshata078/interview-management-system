// Copyright (c) 2024, Akshata and contributors
// For license information, please see license.txt

frappe.ui.form.on("Interview Schedule", {
    refresh(frm) {
       if(frm.doc.status === "In Progress"){
        frm.add_custom_button("Hire",()=>{
            frm.set_value("status","Hired");
            frm.save();
        });
        frm.add_custom_button("Reject",()=>{
            frm.set_value("status","Rejected");
            frm.save();
        })
       }

       if(frm.doc.status === "Hired"){
        frm.add_custom_button("Reject",()=>{
            frm.set_value("status","Rejected");
            frm.save();
        });
       }
    },
    onload(frm){
        frappe.show_alert(`You are viewing ${frm.doc.candidate_name}'s document!`)
    },
    on_trash(frm){
        frappe.show_alert("deleted successfully")
    }
});

