// JavaScript Document
// Create by Felix Huang on June 17 2015.
// Description: Common functions.
// Update Info: N/A

/*---------------- Parameters Setting ----------------*/
/*var $REDIRECT_URL = ''; //Please go to "/Scripts/js/Master.js to set the value.
 */


function resetFieldText(obj, inputClassName) {
    /// <summary>重設輸入框預設值</summary>
    /// <param name="obj">對應物件</param>
    /// <param name="inputClassName">CSS Class 樣式</param>

    if (obj.value == '') {
        obj.value = obj.defaultValue;
        obj.className = inputClassName;
    }
}

function clearFieldText(obj, inputClassName) {
    /// <summary>清空輸入框內容</summary>
    /// <param name="obj">對應物件</param>
    /// <param name="inputClassName">CSS Class 樣式</param>

    obj.value = '';
    obj.className = '';
    if (inputClassName != null)
        obj.className = inputClassName
}

function clearFieldTextWhenKeyPress(obj, inputClassName) {
    /// <summary>當按壓鍵盤字元後，清空輸入框預設內容</summary>
    /// <param name="obj">對應物件</param>
    /// <param name="inputClassName">CSS Class 樣式</param>   

    //鍵盤壓下尚未放起時，物件值仍為預設值，因此將物件顯示的文字刪除
    if (obj.value == obj.defaultValue) {
        obj.value = '';
        obj.className = '';
        if (inputClassName != null)
            obj.className = inputClassName;
    }
}


function ChangeTexfieldType(obj, type) {
    /// <summary>更改 Input 的型態 (Type)</summary>
    /// <param name="obj">對應物件</param>
    /// <param name="type">欲轉換的類型</param>   

    if (type != null && ((obj.type != 'password' && obj.value == obj.defaultValue) || (obj.type == 'password' && obj.value == obj.defaultValue)))
        obj.type = type;
}

function NormalizeSerialNumberString(obj) {
    /// <summary>序號字串字動添加分格符號</summary>
    /// <param name="obj">對應物件</param>

    if (obj.value.length > 6)
        obj.value = obj.value;
    else {
        var realValue = obj.value.replace(/\-/g, '');
        if (realValue.length >= 6) {
            if (realValue.length % 6 == 0)
                obj.value = obj.value + '-';
        }
    }
    return;
}

function pressEnterKey(e, targetObjId) {
    /// <summary>點選特定鍵盤按鍵，觸發點選某一物件</summary>
    /// <param name="e">傳入頁面事件 (直接傳入 event )</param>
    /// <param name="targetObjId">String: 擁有 Click 事件之對應按鈕或連結之ID</param>

    if (!e) e = window.event; // fix IE 
    if (e && e.keyCode == 13) { //Press Enter
        document.getElementById(targetObjId).click();
    }
}

function doActionWhenKeyPress(e) {
    /// <summary>監控鍵盤點選後事件，執行特定動作 (舊版 IE 可能不適用)</summary>   

    if (!e) e = window.event; // fix IE

    //Alt+` -> Redirect URL
    if (e.altKey && e.keyCode == '192') {
        document.location.href = $REDIRECT_URL;
    }
    //Esc -> hide popup panel
    if (e && e.keyCode == '27') {
        document.getElementById('divMsgContainer').style.display = 'none';
    }
}
document.onkeyup = doActionWhenKeyPress;


function CheckContextStringLength(InputControlId, ResultObjClassName) { /// <summary>計算目前控制項填入的字數</summary>
    /// <param name="InputControlId">要監控的輸入控制項 ClientID</param>
    /// <param name="ResultObjClassName">String: 顯示回傳結果的選擇器 Class 名稱</param>

    var resultObj = document.getElementsByClassName(ResultObjClassName.substr(0, 1) == '.' ? ResultObjClassName.replace('.', '') : ResultObjClassName);
    if (resultObj != null)
        resultObj[0].innerHTML = document.getElementById(InputControlId.substr(0, 1) == '.' ? InputControlId.replace('.', '') : InputControlId).value.length;
}

function Lower2Uppercase(e) {
    /// <summary>小寫字元轉大寫字元</summary>
    /// <param name="e">對應物件</param>
    e.value = e.value.toUpperCase();
}

function Upper2Lowercase(e) {
    /// <summary>大寫字元轉小寫字元</summary>
    /// <param name="e">對應物件</param>
    e.value = e.value.toLowerCase();
}

function RemoveHtmlTags(str) { /// <summary>移除字串裡的 HTML 標籤</summary>
    /// <param name="str">原始字串</param>

    var regEx = /<[^>]*>/g;
    return str.replace(regEx, "").replace(/\&nbsp;/g, ''); //Remove HTML Tag and &nbsp;
}

function HasClass(obj, className) {
    /// <summary>判斷是否有設定特定的類別名稱</summary>
    /// <param name="obj">要判斷的物件</param>
    /// <param name="className">要檢驗的類別</param>

    if (obj.className.indexOf(className) > -1)
        return true;
    else
        return false;
}

function AddClass(obj_ID, className) {
    /// <summary>新增物件類別</summary>
    /// <param name="obj">要新增類別的物件</param>
    /// <param name="className">新增的類別名稱</param>

    obj = document.getElementById(obj_ID);
    if (!HasClass(obj, className)) {
        obj.className = obj.className.trim() + ' ' + className;
    }
}

function RemoveClass(obj_ID, className) {
    /// <summary>移除物件類別</summary>
    /// <param name="obj">要移除類別的物件</param>
    /// <param name="className">移除的類別名稱</param>

    obj = document.getElementById(obj_ID);
    objClass = obj.className.replace(className, '');
    document.getElementById(obj_ID).className = objClass.trim();
}

function ChangeInputUsableStatus(sourceObj, targetObjId) {
    /// <summary>由主輸入欄位輸入值與否開啟或關閉另一個對應的輸入欄位的啟用狀態</summary>
    /// <param name="sourceObj">主控制物件本體</param>
    /// <param name="targetObjId">受控制的目標輸入物件 ID 名稱</param>

    if (sourceObj.value.length > 0) {
        document.getElementById(targetObjId).disabled = false;
    } else {
        document.getElementById(targetObjId).disabled = true;
        document.getElementById(targetObjId).value = '';
    }
}

function getRadioButtonListSelectedValue(elementName) {
    /// <summary>取得核取方塊 (RadioButtonList) 選取值</summary>
    /// <param name="elementName">物件名稱 (非 ID)</param>
    var obj = document.getElementsByName(elementName);
    if (obj !== 'undefined' && obj != null) {
        for (var i = 0, length = obj.length; i < length; i++) {
            if (obj[i].checked) {
                return obj[i].value;
                break;
            }
        }
    }
    else {
        return '';
    }
}

function getDropDownListSelectedValue(obj_id) {
    /// <summary>取得下拉選單選取值</summary>
    /// <param name="obj_id">物件 ID</param>

    obj = document.getElementById(obj_id);
    if (obj !== 'undefined' && obj != null) {
        return obj.options[obj.selectedIndex].value;
    }
    else {
        return '';
    }
}


function moveCursorPosition(objId, position) {
    /// <summary>指定滑鼠停留位置</summary>
    /// <param name="objId">主控制物件本體</param>
    /// <param name="position">指定的位置 (未指定，將設定為開頭)</param>

    var obj = document.getElementById(objId);
    obj.focus();
    position = typeof position === 'undefined' || isNaN(position) ? 0 : position;

    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character', position);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = position;
    }
}

function inputRestrict(e, extra_str) {
    /// <summary>限制輸入的字元</summary>
    /// <param name="e">事件</param>
    /// <param name="extra_str">字串: 允許的字元清單</param>

    if (typeof extra_str !== 'string') {
        return true;
    } else {
        var base_char_array = new Array();
        extra_str = extra_str.trim();

        for (i = 0; i < extra_str.length; i++) {
            var j = i + 1;
            var c = extra_str.substring(i, j);
            if (c.trim() != '') {
                base_char_array.push(c);
            }
        }
        // MSIE hack
        if (window.event) {
            e = window.event;
        }
        //Back: 8, Tab: 9, Shift: 16, Space: 32, <-: 37, ->:39, Del: 46, Home: 36, End: 35
        return base_char_array.indexOf(String.fromCharCode(e.charCode)) != -1 || e.charCode == 32 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 16 || e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 46 || (e.shiftKey && e.keyCode == 9) || (e.shiftKey && e.keyCode == 35) || (e.shiftKey && e.keyCode == 36);
    }
}

function inputNumberOnly(e, extra_str) {
    /// <summary>限制僅能輸入數字</summary>
    /// <param name="e">事件</param>
    /// <param name="extra_str">字串: 額外擴充的允許字元</param>

    var base_char = '0123456789';
    base_char = typeof extra_str === 'string' ? base_char + extra_str.trim() : base_char;
    return inputRestrict(e, base_char);
}

function moveCreditCardTextbox(obj, e, targetObj) {
    /// <summary>信用卡欄位填寫過程中，當該欄位字元填滿後，自動移動至下一個數字群組欄位</summary>
    /// <param name="obj">目前填寫的欄位物件</param>
    /// <param name="e">事件</param>
    /// <param name="targetObj">動作對應屬性 (屬性: nextObjId: 下一個欄位ID; prevObjId: 上一個欄位ID) </param>

    // MSIE hack
    if (window.event) { e = window.event; }
    var keyCode = (96 <= e.keyCode && e.keyCode <= 105) ? e.keyCode - 48 : e.keyCode; //0-9

    var objMaxlength = obj.getAttribute('maxlength') == null || obj.getAttribute('maxlength') == '' ? null : obj.getAttribute('maxlength');
    var p_nextObjId = targetObj.nextObjId === 'undefined' ? '' : targetObj.nextObjId;
    var p_prevObjId = targetObj.prevObjId === 'undefined' ? '' : targetObj.prevObjId;
    var o_nextObj = document.getElementById(p_nextObjId);
    var o_prevObj = document.getElementById(p_prevObjId);


    //move to NEXT (input number only)
    if ((keyCode >= 48 && keyCode <= 57)) {
        if (objMaxlength != null && obj.value.length == objMaxlength && o_nextObj != null) {
            var nextObjMaxlength = o_nextObj.getAttribute('maxlength') == null || o_nextObj.getAttribute('maxlength') == '' ? null : o_nextObj.getAttribute('maxlength');

            if (nextObjMaxlength == null) {
                //若原先 textboxA 字元長度已飽狀態下輸入字元，而下一個目標 textboxB 有値且長度無限制，將輸入値插入 textboxB 的開頭
                if (o_nextObj.value != '') {
                    o_nextObj.value = (obj.value.length == objMaxlength ? String.fromCharCode(keyCode) : '') + o_nextObj.value;
                    position = 1;
                    moveCursorPosition(p_nextObjId, 1);
                } else {
                    moveCursorPosition(p_nextObjId, 0);
                }
            } else {
                //若原先 textboxA 字元長度已飽狀態下輸入字元，而下一個目標 textboxB 有値但尚未飽和，將輸入値插入 textboxB 的開頭
                if (obj.value.length == 4 && o_nextObj.value.length != nextObjMaxlength) {
                    moveCursorPosition(p_nextObjId, 0);
                } else if (o_nextObj.value.length == nextObjMaxlength) {
                    moveCursorPosition(p_nextObjId, 0);
                    o_nextObj.setSelectionRange(0, nextObjMaxlength);
                }
            }
        }
    }
        //move to Next (input "->"" Key)
    else if (objMaxlength != null && obj.selectionEnd == objMaxlength && keyCode == 39 && o_nextObj != null) {
        moveCursorPosition(p_nextObjId, 0);
    }
        //move to Previous (input BACK, "<-"" Key)
    else if (obj.selectionStart == 0 && (keyCode == 37 || keyCode == 8 && o_prevObj != null)) {
        moveCursorPosition(p_prevObjId, o_prevObj.value.length);
    }
}
