 <div id="myEditor"></div>  
   
   var caretPos = 0,
                                sel, range;
                            if (window.getSelection) {
                                sel = window.getSelection();
                                if (sel.rangeCount) {
                                    range = sel.getRangeAt(0);
                                    caretPos = range.endOffset;
                                    console.log("index: "+caretPos);
                                    console.log("fullText: "+range.commonAncestorContainer.parentElement.innerText);
                                    console.log("before: "+range.commonAncestorContainer.parentElement.innerText.substring(0, caretPos));
                                    console.log("after: "+ range.commonAncestorContainer.parentElement.innerText.substring(caretPos, 
                                    range.commonAncestorContainer.parentElement.innerText.length-1));

                                }
                            }
