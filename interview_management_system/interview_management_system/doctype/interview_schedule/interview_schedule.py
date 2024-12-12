# Copyright (c) 2024, Akshata and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import today, getdate

class InterviewSchedule(Document):
    def validate(self):
        current_date = getdate(today())
        selected_date = getdate(self.interview_date) 
        
        if selected_date < current_date:
            frappe.throw("You can't select a previous date for the interview.")