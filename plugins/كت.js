
let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
                    `*∞──────「كـت」──────∞*

*~『لوفي』~*

*∞──────「كـت」──────∞*`,  
                      `*∞──────「كـت」──────∞*

*~『ناروتو』~*

*∞──────「كـت」──────∞*`,  
                         `*∞──────「كـت」──────∞*

*~『سابو』~*

*∞──────「كـت」──────∞*`,  
                            `*∞──────「كـت」──────∞*

*~『ايس』~*

*∞──────「كـت」──────∞*`,  
                               `*∞──────「كـت」──────∞*

*~『رايلي』~*

*∞──────「كـت」──────∞*`,  
                                    `*∞──────「كـت」──────∞*

*~『جيرايا』~*

*∞──────「كـت」──────∞*`,  
                                      `*∞──────「كـت」──────∞*

*~『ايتاتشي』~*

*∞──────「كـت」──────∞*`,
                                      `*∞──────「كـت」──────∞*

*~『ساسكي』~*

*∞──────「كـت」──────∞*`,
                                       `*∞──────「كـت」──────∞*

*~『شيسوي』~*

*∞──────「كـت」──────∞*`,
                                        `*∞──────「كـت」──────∞*

*~『يوهان』~*

*∞──────「كـت」──────∞*`,
                                         `*∞──────「كـت」──────∞*

*~『غوهان』~*

*∞──────「كـت」──────∞*`,
                                          `*∞──────「كـت」──────∞*

*~『آيزن』~*

*∞──────「كـت」──────∞*`,
                                          `*∞──────「كـت」──────∞*

*~『فايوليت』~*

*∞──────「كـت」──────∞*`,
                                           `*∞──────「كـت」──────∞*

*~『نامي』~*

*∞──────「كـت」──────∞*`,
                                     `*∞──────「كـت」──────∞*

*~『هانكوك』~*

*∞──────「كـت」──────∞*`,
                                            `*∞──────「كـت」──────∞*

*~『ايتاتشي』~*

*∞──────「كـت」──────∞*`,

                                           `*∞──────「كـت」──────∞*

*~『روبين』~*

*∞──────「كـت」──────∞*`,
                                     `*∞──────「كـت」──────∞*

*~『كاكاشي』~*

*∞──────「كـت」──────∞*`,
                                            `*∞──────「كـت」──────∞*

*~『ريومو』~*

*∞──────「كـت」──────∞*`,
                                            `*∞──────「كـت」──────∞*

*~『ريمورو』~*

*∞──────「كـت」──────∞*`,
                            `*∞──────「كـت」──────∞*

*~『غوكو』~*

*∞──────「كـت」──────∞*`,  
                            `*∞──────「كـت」──────∞*

*~『غوغو』~*

*∞──────「كـت」──────∞*`,  
                               `*∞──────「كـت」──────∞*

*~『كيلوا』~*

*∞──────「كـت」──────∞*`,  
                                  `*∞──────「كـت」──────∞*

*~『غون』~*

*∞──────「كـت」──────∞*`,  
                               `*∞──────「كـت」──────∞*

*~『كورابيكا』~*

*∞──────「كـت」──────∞*`,  
                                    `*∞──────「كـت」──────∞*

*~『يوسكي』~*

*∞──────「كـت」──────∞*`,  
                                      `*∞──────「كـت」──────∞*

*~『ايشيدا』~*

*∞──────「كـت」──────∞*`,
                                      `*∞──────「كـت」──────∞*

*~『ايتيشغو』~*

*∞──────「كـت」──────∞*`,
                                       `*∞──────「كـت」──────∞*

*~『ميناتو』~*

*∞──────「كـت」──────∞*`,
                                        `*∞──────「كـت」──────∞*

*~『رينجي』~*

*∞──────「كـت」──────∞*`,
                                         `*∞──────「كـت」──────∞*

*~『جيمبي』~*

*∞──────「كـت」──────∞*`,
                                          `*∞──────「كـت」──────∞*

*~『انوس』~*

*∞──────「كـت」──────∞*`,
                                          `*∞──────「كـت」──────∞*

*~『سايتاما』~*

*∞──────「كـت」──────∞*`,
                                           `*∞──────「كـت」──────∞*

*~『نيزيكو』~*

*∞──────「كـت」──────∞*`,
                                     `*∞──────「كـت」──────∞*

*~『اوراهارا』~*

*∞──────「كـت」──────∞*`,
                                            `*∞──────「كـت」──────∞*

*~『تانجيرو』~*

*∞──────「كـت」──────∞*`,

                                           `*∞──────「كـت」──────∞*

*~『نويل』~*

*∞──────「كـت」──────∞*`,
                                     `*∞──────「كـت」──────∞*

*~『استا』~*

*∞──────「كـت」──────∞*`,
                                            `*∞──────「كـت」──────∞*

*~『يونو』~*

*∞──────「كـت」──────∞*`,
                                            `*∞──────「كـت」──────∞*

*~『لايت』~*

*∞──────「كـت」──────∞*`

     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
