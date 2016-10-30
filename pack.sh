if [ "$1" != "chrome" ] && [ "$1" != "firefox" ]; then
  echo "Not a valid extension";
  exit;
fi

echo "copying shared files into $1";

#pack images
[ -d bin/$1/images ] || mkdir -p bin/$1/images;
for i in $( ls shared/images); do
  cp shared/images/$i bin/$1/images/;
done
for i in $( ls $1/images); do
  cp $1/images/$i bin/$1/images/;
done

#pack libraries
[ -d bin/$1/lib ] || mkdir -p bin/$1/lib;
for i in $( ls shared/lib); do
  cp shared/lib/$i bin/$1/lib/;
done

#combine and pack styles (css)
[ -d bin/$1/styles ] || mkdir -p bin/$1/styles;
for i in $( ls shared/styles); do
  if [ -f $1/styles/_$i ]; then
    cat shared/styles/$i $1/styles/_$i > bin/$1/styles/$i;
  else
    cp shared/styles/$i bin/$1/styles/;
  fi
done
for i in $( ls $1/styles); do
  if [[ $i != _* ]]; then
    cp $1/styles/$i bin/$1/styles/;
  fi
done

#combine and pack scripts
[ -d bin/$1/scripts ] || mkdir -p bin/$1/scripts;
for i in $( ls shared/scripts); do
  if [ -f $1/scripts/_$i ]; then
    cat shared/scripts/$i $1/scripts/_$i > bin/$1/scripts/$i;
  else
    cp shared/scripts/$i bin/$1/scripts/;
  fi
done
for i in $( ls $1/scripts); do
  if [[ $i != _* ]]; then
    cp $1/scripts/$i bin/$1/scripts/;
  fi
done

#pack any other files
for i in $( find $1 -maxdepth 1 -type f ); do
  cp $i bin/$1/;
done
