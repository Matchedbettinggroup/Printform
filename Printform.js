/* 
    Document   : printForm
    Created on : Mar 22, 2013, 11:33:23 AM
    Author     : 
    Description:
        For printing live forms
*/

.form-section { 
    display: inline !important;
}
.form-pagebreak {
    display: none !important;
}
.form-section-closed {
    height: auto !important;
}
/* Bugfix #1807325 :: position of hidden sections are fixed for printing */
@media print {
    .page-section {
        position:initial !important;
    }
}