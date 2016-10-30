if [ "$1" != "chrome" ] && [ "$1" != "firefox" ]; then
  echo "Not a valid extension";
  exit;
fi

echo "copying shared files into $1";

[ -d $1/images ] || mkdir -p $1/images;
for i in $( ls shared/images); do
  cp shared/images/$i $1/images/;
done

[ -d $1/styles ] || mkdir -p $1/styles;
for i in $( ls shared/styles); do
  cp shared/styles/$i $1/styles/;
done

[ -d $1/lib ] || mkdir -p $1/lib;
for i in $( ls shared/lib); do
  cp shared/lib/$i $1/lib/;
done

[ -d $1/scripts ] || mkdir -p $1/scripts;
for i in $( ls shared/scripts); do
  if [ -f $1/scripts/_$i ]; then
    cat shared/scripts/$i $1/scripts/_$i > $1/scripts/$i;
  else
    cp shared/scripts/$i chrome/scripts/;
  fi
done
