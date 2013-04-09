/** lib.js
 * @author: Jan Odvarko, www.softwareishard.com
 */

function cancelEvent(event)
{
    event.stopPropagation();
    event.preventDefault();
};
