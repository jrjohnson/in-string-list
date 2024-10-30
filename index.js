export default function inStringList(needle, haystack, seperator = ',') {
  const needleType = typeof needle;
  if (needleType !== 'string') {
    console.error(`needle must be a string, you sent a ${needleType}`);
    return false;
  }

  const haystackType = typeof haystack;
  if (haystackType !== 'string') {
    console.error(`haystack must be a string, you sent a ${haystackType}`);
    return false;
  }

  const seperatorType = typeof seperator;
  if (seperatorType !== 'string') {
    console.error(`seperator must be a string, you sent a ${seperatorType}`);
    return false;
  }
  const arr = haystack.split(seperator);
  return arr.includes(needle);
}
