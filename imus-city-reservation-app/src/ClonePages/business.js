import React from "react";

const Business = () => {
  return (
    <div className="container no-animations">
      <div className="row p-3">
    

      {/*Sidebar*/}
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
    
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ backgroundColor: "white" }}><h3>Business</h3></li>
                    <li className="list-group-item "><a href="#WhyInvest" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="collapsed">Why Invest in Imus?</a></li>
                    <li className="list-group-item "><a href="#Accomodation" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseExample" className="">Accommodation</a></li>
                    <li className="list-group-item "><a href="#Communication" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="collapsed">Communication</a></li>
                    <li className="list-group-item "><a href="#CourierandGo" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" className="collapsed">Courier and Cargo</a></li>
                    <li className="list-group-item "><a href="#NationalTaxes" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">National Taxes</a></li>
                    <li className="list-group-item "><a href="#Transportation" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">Transportation</a></li>
                    <li className="list-group-item "><a href="#PowerandWater" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">Utilities: Power and Water</a></li>
                </ul>
    
            </div>
            </div>

        {/* Main content */}
        <div className="col-md-6 col-sm-6">
          <div className="row">
            {/* YouTube video */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden"
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/ROTO4QJJyso?autoplay=1&loop=1&playlist=ROTO4QJJyso&rel=0"
                title="City of Imus - Top Tax Payers 2024"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            
            
            {/*Accordions*/}
            <div className="col-md-12 col-sm-6">
                <div className="row">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">

                        <div id="WhyInvest" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          
                            <div className="card card-body">
                              <h2> Why Invest in Imus</h2>
                              <p/>
                               <br/>
                               The City of Imus is recognized as one of the country's most Economically Dynamic Component Cities.<br/><br/>

                               Geographically located in the Northeastern part of Cavite, Imus is 
                               politically subdivided into 97 barangays. Being a highly urbanized city, Imus takes effective and aggressive 
                               strides for technological progressions, earning the distinction as one of the most Competitive Cities at the 
                               national level.<br/><br/>

                               The investment climate in the City has attracted multiple investors, both foreign and local. These investments create 
                               new jobs, provide high revenue taxes, serve as vehicles for new technologies, and boost earnings from exports.<br/><br/>

                               Big corporations such as Liwayway Corporation, San Miguel-Yamamura Asia Corporation, and EDS Manufacturing   
                               Incorporated-Yazaki   have   continuously   operated   in   the   City.   Likewise,   several shopping malls 
                               have emerged such as Robinsons Place Imus, The District, S&amp;R Membership Shopping, CityMall, Shopwise, Lotus Mall, 
                               Puregold, and SM Center Imus.<br/><br/>

                               Committed to supporting its economic enterprises, Imus continues to provide businesses, particularly micro, small, and medium 
                               enterprises (MSMEs),with apt learning resources to sustain operations in the new normal with the conduct of talks, trainings, and workshops
                               such as the Imus Seminars of Emerging Entrepreneurs (iSEE), Imus City Business Summit, Business Cliniquing, Business Expo, 
                               and E- Talakayan.<br/><br/>

                               The City Government has also established several platforms for businesses, such as the following:<br/>
                                1.	Business One-Stop Shop (BOSS), which offers ease and convenience for the application and renewal 
                                of business permits;<br/>
                                2.	Go Negosyo Center, which provides a direct link between entrepreneurs and the Department of Trade and Industry (DTI) 
                                for business consultations and registration; and<br/>
                                3.	Implementing the "Ease of Doing Business Act" which helps simplify business procedures.
                                <br/><br/>

                                The influx of investors who have chosen Imus as their home, is a concrete testament that the 
                               City's business policies have successfully created and sustained a business-friendly environment, earning Imus City the 
                               distinction as one of the most Business Friendly Cities in the Philippines.
                              <p/>
                        </div>
                        <p className="text-center"><br/>
                          Conversion rate 1US$ = Php 58.46*<br/>
                          *Based on quotations published by the respective agencies. <br/>These may vary and change without prior notice.
                        </p>
                        </div>

                      </div>
                      

                      <div className="accordion-item">
                        <div id="Accomodation" className="accordion-collapse collapse show" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            
                      {/* <table className="table-lg text-center" width="100%">
                            <thead><tr className="tableizer-firstrow" style={{background-color:#053774;color:white}}>
                              <th >HOTELS (room per night)</th><th className="text-center">Rates (PHP)</th><th className="text-center">Rates (USD)</th><th></th></tr></thead><tbody>
                             <tr><td>Classic Room</td><td>1,500.00 - 4,800.00</td><td>27 - 87</td></tr>
                             <tr><td>Deluxe Room</td><td>2,700.00 - 7,900.00</td><td>48 - 142</td></tr>
                             <tr><td>Suite Room</td><td>3,500.00 - 10,000.00</td><td>63 - 180</td></tr>
                             <tr><td>Dorm Room</td><td>3,500.00 - 10,000.00</td><td>63 - 180</td></tr>
                             <tr><td>Family</td><td>4,000.00 - 10,500.00</td><td>72 - 188</td></tr>
                            </tbody></table> 
                          </br> */}                  
<br/>
                            <table className="table-lg text-center" width="100%" id="roomid">
                              <tr className="tableizer-firstrow" style={{backgroundColor:"#053774", color:"white"}}>
                                <th>Room Per Night</th><th>Rates (PHP)</th><th>Rates (USD)</th></tr><tbody>
                               <tr><td>Standard Room (2 pax)</td><td>1,500.00 - 2,800.00</td><td>&nbsp;&nbsp;&nbsp;25.66 -	47.90                              </td></tr>
                               <tr><td>Family Room (4 pax)</td><td>3,000.00 - 6,000.00</td><td>&nbsp;&nbsp;&nbsp;51.32 -	102.63                              </td></tr>
                              </tbody></table>
                            <br/>                    
<br/>                         
                            <table className="table-lg text-center" width="100%" id="roomid">
                                <thead><tr className="tableizer-firstrow" style={{backgroundColor:"#053774", color:"white"}}><th>Office and Commercial Space Rental <br/>(Per sq. meter/month)</th><th>Rates (PHP)</th><th>Rates (USD)</th></tr></thead><tbody>
                                 <tr><td>Commercial Zone</td><td>500.00 - 600.00</td><td>8.55 -	10.26                                </td></tr>
                                 <tr><td>Outside Commercial Zone</td><td>400.00 - 500.00</td><td>6.84 -	8.55                                </td></tr>
                              </tbody></table>
                            
                          
                          
                          
                          </div>
                          <p className="text-center"><br/>
                            Conversion rate 1US$ = Php 58.46*<br/>
                            *Based on quotations published by the respective agencies. <br/>These may vary and change without prior notice.
                          </p>
                        </div>
                      </div>
                      

                      <div className="accordion-item">
                        <div id="Communication" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample" >
                          <div className="accordion-body ">
                            
                            <table className="table-lg text-center" width="100%">
                              <thead><tr className="tableizer-firstrow" style={{backgroundColor:"#053774",color:"white"}}><th>Monthly Service Fees</th><th>PhP 1699.00 per month</th></tr></thead><tbody>
                               <tr><td>Local Fees</td><td>Free and Unlimited</td></tr>
                               <tr><td>NDD Calls</td><td>₱ 3.00 per minute</td></tr>
                               <tr><td>IDD Calls</td><td>$ 0.40 per minute</td></tr>
                               <tr><td>Cellular Calls</td><td>₱ 6.50 per minute</td></tr>
                               <tr><td>Local Calls</td><td>₱ 2.00 per minute</td></tr>
                               <tr><td>Embassy Calls</td><td>₱ 36.08* per minute</td></tr>
                              </tbody></table>


                          
                          </div>
                          <p className="text-center"><br/>
                            Conversion rate 1US$ = Php 58.46*<br/>
                            *Based on quotations published by the respective agencies. <br/>These may vary and change without prior notice.
                          </p>

                          </div>
                        </div>
                        


                      <div className="accordion-item">
                        <div id="CourierandGo" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">

                            <table className="table-lg text-center" width="100%">
                              <thead><tr className="tableizer-firstrow" style={{backgroundColor:"#053774", color:"white"}}><th>Courier and Cargo</th><th>Minimum Rate (PHP)</th><th>Minimum Rate (USD)</th></tr></thead><tbody>
                               <tr><td>LBC EXPRESS</td><td>160</td><td>2.74                              </td></tr>
                               <tr><td>FASTTRACK</td><td>250</td><td>4.28                              </td></tr>
                               <tr><td>ERIM EXPRESS</td><td>80</td><td>1.37                              </td></tr>
                               <tr><td>XEND BUSSINESS SOLUTIONS</td><td>89</td><td>1.52                              </td></tr>
                               <tr><td>J&amp;T EXPRESS</td><td>80</td><td>1.37                              </td></tr>
                               <tr><td>JRS EXPRESS</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Mail</td><td>107</td><td>1.83                              </td></tr>
                               <tr><td>Cargo</td><td>165</td><td>2.82                              </td></tr>
                               <tr><td>Box</td><td>350</td><td>5.99                              </td></tr>
                               <tr><td>Pouch</td><td>220</td><td>3.76                              </td></tr>
                               <tr><td>2GO COURIER SERVICES</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Cash First Php 5,000</td><td>120</td><td>2.05                              </td></tr>
                               <tr><td>Box (3kg)</td><td>245</td><td>4.19                              </td></tr>
                               <tr><td>ABEST EXPRESS</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Document</td><td>60</td><td>1.03                              </td></tr>
                               <tr><td>Parcel</td><td>90</td><td>1.54                              </td></tr>
                               <tr><td>Box</td><td>170</td><td>2.91                              </td></tr>
                               <tr><td>METROWIDE COURIER SERVICES</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Medium (Min)</td><td>145</td><td>2.48                              </td></tr>
                               <tr><td>Large Pouch (Min)</td><td>190</td><td>3.25                              </td></tr>
                               
                              </tbody></table>


                          </div>
                          <p className="text-center"><br/>
                            Conversion rate 1US$ = Php 58.46*<br/>
                            *Based on quotations published by the respective agencies. <br/>These may vary and change without prior notice.
                          </p>
                        </div>
                      </div>
                      
                      
                      <div className="accordion-item">
                        <div id="NationalTaxes" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">


                            <h2>VALUE ADDED TAX (VAT)</h2>
                            Value added tax is a tax imposed and collected on every sale, barter, exchange, or transaction deemed sale of taxable goods, properties, lease of goods or properties, or services in the course of trade or business as they pass along the production and distribution chain, the tax is limited only to the value added to such goods, properties or services by the seller or transferor.<br/><br/>
                            
                            <h2>PERCENTAGE TAX</h2>
                            Any person engaged in business whose sales or receipts are exempt from payment of the value added tax and who is not a VAT-registered person must file a percentage tax return and pay the appropriate percentage tax. Percentage tax is a business tax measured by a given ratio between the gross sales or receipts and the burden imposed upon the taxpayer.<br/><br/>
                            
                            <h2>EXCISE TAX</h2>
                            The excise tax applies to certain specified goods or articles manufactured or produced in the Philippines for domestic sale, consumption, or any other disposition and to things imported into the Philippines.<br/><br/>

                            Specific tax – an excise tax imposed on certain goods based on weight or volume capacity or any other physical unit of measurement. It applies to alcohol and alcohol products, tobacco and tobacco products, and petroleum products.<br/><br/>

                            Ad valorem tax – an excise tax imposed on certain goods based on selling price or other specified value of the goods. It applies to mineral products, automobiles and non-essential goods.<br/><br/>
                            
                            <h2>INCOME TAX</h2>
                            Income tax is a tax on all yearly profits arising from property, profession, trades or offices or as a tax on a person’s income, emoluments, profits and the like.<br/><br/>

                            A. Individuals<br/>
                            – resident citizen receiving income from sources within or outside the Philippines<br/>
                            – non-resident citizen receiving income from sources within the Philippines.<br/>
                            – aliens whether resident or not receiving income from sources within the
                            Philippines.<br/><br/>

                            B. Corporations (no matter how created or organized including general partnership) includes domestic corporations receiving income from sources within and outside the Philippines and foreign corporation receiving income from sources within the Philippines.
                          <br/><br/>
                            C. Estates and Trusts engaged in trade or business.
                          <br/><br/>
                            
                            <h2>WITHHOLDING TAX</h2>
                            Classification of withholding taxes:<br/>
                            Expanded withholding tax<br/>
                            Final withholding tax<br/>
                            Withholding of income tax on compensation<br/>
                            Withholding of creditable VAT and other percentage taxes<br/><br/>


                            <h2>CAPITAL GAINS TAX</h2>
                            
                            Capital gains is a tax imposed on the gains presumed to have been realized by the seller from the sale, exchange, or other disposition of real property located in the Philippines, classified as capital assets, including pacto de retro sales and other forms of conditional sale.<br/><br/>
                            
                            <h2>DOCUMENTARY STAMP TAX</h2>

                            Documentary stamp tax is a tax on documents, instruments, loan agreements and papers evidencing the acceptance, assignment, sale or transfer of an obligation, rights, or property incident thereto. There are different documents that are subject to different rates of Documentary Stamp Tax.<br/><br/>

                            Click here for more information on National Taxes. http://www.bir.gov.ph/

                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <div id="Transportation" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">

                            <table className="table-lg text-center" width="100%">
                              <thead><tr className="tableizer-firstrow" style={{backgroundColor:"#053774", color:"white"}}><th>Transportation</th><th>Rate (PHP)</th><th>Rate (USD)</th></tr></thead><tbody>
                               <tr><td>UV EXPRESS</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Manila - Imus</td><td>70</td><td>1.20</td></tr>
                               <tr><td>PROVINCIAL BUSES</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Manila - Imus (Air-Conditioned)</td><td>40</td><td>0.68</td></tr>
                               <tr><td>Manila - Imus (Ordinary)</td><td>30</td><td>0.51</td></tr>
                               <tr><td>CITY FARE</td><td>&nbsp;</td><td>&nbsp;</td></tr>
                               <tr><td>Imus Lumina - New City Hall of Imus </td><td>28</td><td>0.48</td></tr>
                               <tr><td>Binakayan - New City Hall of Imus</td><td>30</td><td>0.51</td></tr>
                               <tr><td>Robinson Imus - New City Hall of Imus </td><td>28</td><td>0.48</td></tr>
                              </tbody></table>

                          </div>
                          <p className="text-center"><br/>
                            Conversion rate 1US$ = Php 58.46*<br/>
                            *Based on quotations published by the respective agencies. <br/>These may vary and change without prior notice.
                          </p>
                        </div>
                        
                      </div>
                      
                      <div className="accordion-item">
                        <div id="PowerandWater" className="accordion-collapse collapse" aria-labelledby="flush-headinEight" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">

                            <h2>POWER (MERALCO)</h2>
                            

                            <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Residential
                                  </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    
                                  For Residential and MicroBiz customers with 0 to 4 kW contracted capacity and Local Government Units <br/><br/>

                                  <h3>
                                <strong>
                                  How to apply for Ordinary Service Application for Residential Customers<br/><br/>
                                </strong></h3>

                                  1. Complete the application form. You may download the form here or visit any Meralco Business Center.<br/><br/>

                                  2. ​Submit the completed form, together with the following requirements, to the Meralco Business Center nearest the home being applied for:​​<br/><br/>

                                  ▶ Original and Photocopy of one valid ID with picture and signature<br/>
                                  ▶ Original and Photocopy of Proof of Ownership or Occupancy (e.g. Transfer Certificate of Title, Notarized Deed of Sale or Lease Contract, etc.)<br/>
                                  ▶ Signed copy of Waiver (You may get the waiver from the Business Center or sign it upon submission of the documents)<br/><br/>

                                  If you are a tenant, you will also be required to submit the original copy of a notarized Undertaking form. This form is also available at the Meralco Business Center.<br/><br/>

                                  3. You will be given a Service Application Number. This will serve as your reference number when you would like to follow-up on the status of your application.<br/><br/>

                                  4. A field representative will conduct a feasibility survey of your home. Please make sure that an authorized representative is present.<br/><br/>

                                  5. Once approved, you will be advised to prepare and pay for your Bill Deposit.<br/><br/>

                                      The bill deposit is equivalent to an estimated one month bill.<br/><br/>

                                  6. Visit the Business Center to pay for your bill deposit, sign the service contract and get your meter socket.<br/><br/>

                                  7. Install the service entrance. This may be done by your private contractor or by the Accredited Meralco Contractor. For more information about the Accredited Meralco Contractor, please visi twww.amc.org.ph

                                  The Service Entrance must comply with Meralco standards. The business center will provide you with an installation guide, together with the meter socket.<br/><br/>

                                  8. Once installed, please email your Service Application Number to your assigned business center. A field representative will visit to ensure that the service entrance meets the standard requirements of Meralco.<br/><br/>

                                  You will be given an advice card (yellow card). This will reflect whether your service entrance is approved for energization or will need some necessary corrections.<br/><br/>

                                  If reworks are needed, please make sure that the recommendations written in the advice card are followed. Once completed, kindly inform the Business Center for inspection.<br/><br/>

                                  9. Once service entrance is approved, you will need to submit the Certificate of Final Electrical Inspection. You may get this from your respective local government unit. The advice card may be required in securing the certificate.

                                  You may also get the services of the Accredited Meralco Contractor. For more information, you may visit www.amc.org.ph<br/><br/>

                                  10. A Meralco crew will visit you within 3 working days to energize your home.



                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Non-residential
                                  </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">

                                    
                                    <strong>Biz</strong> – For non-residential customers with 5 to 499 kW contracted capacity <br/><br/>
                                    <strong>Corporate</strong> – For private customers with 500 kW and up contract capacity and National Government<br/><br/>

                                    <h3>What are the classifications of Meralco new service applications?</h3>
                                    <br/>
                                    
                                    Meralco has two (2) types of new electricity service applications:<br/><br/>
                                    
                                    ▶ General Service – this type of connection covers non-residential entities that have a contracted capacity below 40kW.<br/>
                                    ▶ General Power – this type of connection covers non-residential entities that have a contracted capacity of at least 40kW.<br/><br/>
                  
                                    <h3>Where can I apply for an electric connection?</h3>
                                    <br/>
                                    
                                    ▶ For customers with contracted capacity of less than 500kW – Please contact a Meralco engineer at the Meralco Business Center that covers your area. To find out the location of the Meralco Business Center nearest you, please call 16211.<br/><br/>
                                    ▶ For customers with contracted capacity of at least 500kW – Please contact the Technical Support Group for Corporate Partners assigned to your area at the Meralco sector offices. To find out which Meralco sector office covers your area, please contact 1622-2378.<br/><br/>
                                    ▶ For conglomerate accounts with contracted capacity of less than 500kW – Please contact the Technical Support Group for Corporate Partners assigned to your area at the Meralco sector offices. To find out which Meralco sector office covers your area and for the complete list of conglomerate accounts, please contact 1622-2378.<br/><br/><br/>
                                    
                                    <h3>What is the application process for service connection?</h3><br/>
                                    
                                    
                                    1. Submit the following documentation:<br/><br/>
                                    
                                    a. Letter of request for electric connection on company letterhead indicating if this is a new service, temporary service application or change in contracted capacity. The letter should also contain the following information:<br/><br/>
                                    
                                    ▶ Surname, first name, middle name<br/>
                                    ▶ Registered business name<br/>
                                    ▶ Mobile phone number<br/>
                                    ▶ Landline phone number<br/>
                                    ▶ Service address (location where electric service is required)<br/>
                                    ▶ Email address<br/>
                                    ▶ Office address<br/>
                                    ▶ Target date of energization<br/><br/>
                                    
                                    b. Authorization letter from the owner and the representative’s valid ID (if application is being coursed through an authorized representative such as a contractor or licensed electrician or electrical engineer).<br/><br/>
                                    
                                    c. Electrical Permit &amp; Certificate of Final Electrical Inspection (CFEI) from the City or Municipal Engineer’s Office.<br/><br/>
                                    
                                    d. Electrical Plans which contain the following: [must be signed &amp; sealed by a Professional Electrical Engineer (PEE)]<br/><br/>
                                    
                                    e. Photocopy of the following:<br/><br/>
                                    
                                    ▶ SEC registration (for corporate entity)<br/>
                                    ▶ BIR Certificate of Registration and Tax Identification Number (TIN)​<br/><br/>
                                    
                                    Any of the following valid identification card with picture – Driver’s License, GSIS ID, SSS ID, passport, PRC License, Pag-ibig ID, Philhealth ID, Firearm’s License, original NBI Clearance<br/><br/>
                                    
                                    ▶ Business/DTI Permit or business name (for sole proprietorship)<br/>
                                    ▶ Contract of Lease (if rented)<br/>
                                    ▶ Condominium Certificate of Title or Contract to Sell (for condominium owners)<br/>
                                    ▶ Transfer Certificate Title (TCT) or Deed of Absolute Sale<br/>
                                    ▶ Secretary’s Certificate authorizing the signatory to sign contracts regarding Meralco’s transactions<br/><br/>
                                    
                                    f. For an applied load of 500kW or more, kindly submit the additional documents:<br/><br/>
                                    
                                    ▶ Complete single-line diagram reflecting winding configurations and relays<br/>
                                    ▶ Transformer vault or metering vault location plan<br/>
                                    ▶ Elevation plan of transformer or metering vault<br/>
                                    ▶ Layout showing rooms surrounding the transformer vault or metering vault room (below/beside/above)<br/>
                                    ▶ Proposed primary and secondary conduit runs<br/>
                                    ▶ Drainage system layout<br/>
                                    ▶ Layout containing location of main circuit breaker [High-voltage switchgear (HVSG) or Low-voltage switchgear (LVSG)]<br/>
                                    ▶ Metering location<br/>
                                    ▶ Hoisting facilities and its specifications<br/>
                                    ▶ Site development plan (relationship of the building to the transformer vault or metering vault within other establishments)<br/>
                                    ▶ Topography diagram (for rolling terrain)<br/><br/>
                                    
                                    2. Upon submission of the necessary documents, Meralco will determine the optimum location for the service entrance and will compute for the applicable contracted capacity based on the requirements specified in the submitted electrical plans. The technical requirements on the service entrance may vary depending on the customer’s location or structural design of its facility. To avoid unnecessary cost, customers should refrain from constructing the service entrance until Meralco advises the optimum location. The contracted capacity will also determine the estimated service deposit required for new service applications.<br/><br/>
                                    
                                    3. For new service applications in an area with an existing Meralco facility – Meralco will send to the customer a new service contract indicating the amount of service deposit for the customer’s acceptance. For new service applications in an area without a close-by Meralco facility – Meralco will design a power facility to suit the customer’s power requirements and compute the relevant project cost to install this facility including the service deposit. Meralco will send to the customer a new service contract with the total project cost for customer’s acceptance.<br/><br/>
                                    
                                    4. When all the mentioned requirements have been satisfied, the customer should submit the duly signed agreement and the Certificate of Final Electrical Inspection (CFEI) and pay the corresponding fees. In certain situations wherein the customer has a temporary service connection, there will be an installation and removal cost for the temporary electric facility structure.<br/><br/>
                                    
                                    5. Meralco installs meter and/or additional facilities and energizes your electric service.<br/>
                                                                      </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Streetlights
                                  </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">


                                    There are two types of streetlight service application – flat rate and metered streetlight service:<br/><br/>

                                    a. Flat Rate streetlight service is for customers who want Meralco to provide the streetlight for an existing Meralco pole. This service is for local government units, barangays, homeowners associations, commercial center associations, industrial estates, and real estate developers.<br/><br/>
                                    
                                    b. Metered Streetlight services are for customers who want to install their streetlight.                                  <br/><br/>

                                    <h3>Requirements</h3><br/>
                                    
                                    ▶Flat Rate Streetlight<br/><br/>
                                            1) Application form<br/>
                                            2) Service Deposit<br/>
                                            3) Certificate of Availability of Funds (optional for LGUs only)<br/><br/>

                                    ▶Metered Streetlight<br/><br/>
                                            1) Application form<br/>
                                            2) Service Deposit<br/>
                                            3) Installation of Meter Base<br/>
                                            4) Certificate of Final Electrical Inspection<br/>
                                    
                                    </div>
                                </div>
                              </div>
                            </div>


                            <h2>WATER (MAYNILAD SERVICES)</h2>
                            <h4 style={{color: "black"}}>Application for New and Additional Water Service Connections</h4>

                            <p>
                            <br/>

                            ▶The assigned Business Area will check if the customer meets the following conditions:<br/><br/>
                            ▷No outstanding balance<br/>
                            ▷No pending illegal case<br/>
                            Must be the owner of the property where the water service connection was authorized<br/>
                            *Failure to meet the conditions above will result to cancellation of the application.<br/>
                            Note: Letter of Authorization or a General Power of Attorney from the owner of the property, together with a valid ID, if the owner is not available to sign the application<br/><br/>
                      
                            ▶Applicant fills out the application form available in any of the Maynilad Business Areas.<br/><br/>
                            ▶Once accomplished, applicant submits the application form to Maynilad along with the following requirements:<br/><br/>

                            ▷ Copy of Transfer Certificate of Title (TCT) or Deed of Sale in the name of the owner of the property(original and photocopy)<br/><br/>
                            ▷ Two (2) clear copies of a valid government-issued I.D.(original and photocopies)<br/><br/>
                            ▷ Proof of Billing<br/><br/>
                            ▷ Barangay Certificate/Clearance (stating “for Maynilad Installation purposes”)<br/><br/>

                            Additional requirements will be required to those water service connections owned by a Company or a Corporation.<br/><br/>

                            ▶ Certificate of incorporation from the Securities and Exchange Commission<br/><br/>
                            ▶ Articles of incorporation<br/><br/>
                            ▶ Secretary’s Certificate authorizing a company representative to deal with Maynilad and to sign relevant documents.<br/><br/>

                            The following may also be required under certain conditions:<br/><br/>

                            ▶ Sanitary and plumbing design or permit; if the property pertains to a building under construction, with a service pipe of at least 50mm.<br/><br/>
                            ▶ Proof of grant of right-of-way from the lot owner; if the water service connection will pass through another private property.<br/><br/>

                            Note: If the property is within the sewered area network of Maynilad, the customer must also apply for a sewer service connection.<br/><br/>

                            ▶ The Maynilad Business Area issues a reference number to the applicant to track the status of the request.<br/><br/>
                            ▶ The Maynilad Business Area reviews and validates the request and the submitted requirements. If an applicant fails to provide the requirements, application will not be processed. However, for incomplete requirements, the Zone Specialist shall be the one to contact the applicant for follow-up.<br/><br/>
                            ▶ Within two working days upon application, a Zone Specialist will visit the customer’s premises for inspection to validate the data provided by the applicant.<br/><br/>

                            Note: Any misrepresentation or inaccurate data given during the interview of the applicant may, depending on the nature of the misrepresentation, or the degree of inaccuracy, constitute sufficient ground for the denial of the application.<br/><br/>

                            1) Maynilad Business Area shall create the customer’s account and once approved, Maynilad shall inform the customer.<br/><br/>
                            2) The Maynilad shall issue the Request to Accept Payment (RAP) form and advises the applicant to present it in any accredited payment center. For check payments, no post-dated and out of town checks shall be accepted.<br/><br/>
                            3) The applicant may submit payment receipt to the designated Business Area once paid. The payment will also be verified by the Zone Specialists. The water service connection will be installed within seven working days upon payment.<br/>


                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Business;
