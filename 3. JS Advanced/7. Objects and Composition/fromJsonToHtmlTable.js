function fromJSONtoHTMLTable(input) {
    const arrOfObj = JSON.parse(input);

    let result = '<table>\n';

    result += '\t<tr>';
    Object.keys(arrOfObj[0]).forEach(n => result += `<th>${escapeHtml(n)}</th>`);
    result += '</tr>\n';

    for (const obj of arrOfObj) {
        result += '\t<tr>';
        Object.values(obj).forEach(e => result += `<td>${escapeHtml(e)}</td>`);
        result += '</tr>\n';
    }

    result += '</table>';

    function escapeHtml(str) {
        return str
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    return result;
}