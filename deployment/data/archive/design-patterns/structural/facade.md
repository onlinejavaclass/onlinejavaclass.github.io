# Structural Design patterns
### Facade pattern

Facade is a structural design pattern that provides a simplified (but limited) interface to a complex system of classes, library or framework.

```
While Facade decreases the overall complexity of the application, it also helps to move unwanted dependencies to one place.
```

### Usage of the pattern in Java

In this example, the Facade simplifies communication with a complex video conversion framework.

The Facade provides a single class with a single method that handles all the complexity of configuring the right classes of the framework and retrieving the result in a correct format.


#### Complex video conversion library

~
public class VideoFile {
    private String name;
    private String codecType;

    public VideoFile(String name) {
        this.name = name;
        this.codecType = name.substring(name.indexOf(".") + 1);
    }

    public String getCodecType() {
        return codecType;
    }

    public String getName() {
        return name;
    }
}
~

#### Codec.java

~
public interface Codec {
}
~


#### MPEG4CompressionCodec

~
public class MPEG4CompressionCodec implements Codec {
    public String type = "mp4";
}
~

#### OggCompressionCodec

~
public class OggCompressionCodec implements Codec {
    public String type = "ogg";
}
~

#### CodeFactory

~
public class CodecFactory {
    public static Codec extract(VideoFile file) {
        String type = file.getCodecType();
        if (type.equals("mp4")) {
            System.out.println("CodecFactory: extracting mpeg audio...");
            return new MPEG4CompressionCodec();
        }
        else {
            System.out.println("CodecFactory: extracting ogg audio...");
            return new OggCompressionCodec();
        }
    }
}
~

#### BitrateReader

~
public class BitrateReader {
    public static VideoFile read(VideoFile file, Codec codec) {
        System.out.println("BitrateReader: reading file...");
        return file;
    }

    public static VideoFile convert(VideoFile buffer, Codec codec) {
        System.out.println("BitrateReader: writing file...");
        return buffer;
    }
}
~

#### AudioMixer

~
import java.io.File;

public class AudioMixer {
    public File fix(VideoFile result){
        System.out.println("AudioMixer: fixing audio...");
        return new File("tmp");
    }
}
~

At the end the last part is this Facade class that simplifies interaction with a complex video conversion framework.
#### Facade provides simple interface of video conversion

~
import java.io.File;

public class VideoConversionFacade {
    public File convertVideo(String fileName, String format) {
        System.out.println("VideoConversionFacade: conversion started.");
        VideoFile file = new VideoFile(fileName);
        Codec sourceCodec = CodecFactory.extract(file);
        Codec destinationCodec;
        if (format.equals("mp4")) {
            destinationCodec = new OggCompressionCodec();
        } else {
            destinationCodec = new MPEG4CompressionCodec();
        }
        VideoFile buffer = BitrateReader.read(file, sourceCodec);
        VideoFile intermediateResult = BitrateReader.convert(buffer, destinationCodec);
        File result = (new AudioMixer()).fix(intermediateResult);
        System.out.println("VideoConversionFacade: conversion completed.");
        return result;
    }
}
~

#### Client code

~
import java.io.File;

public class Demo {
    public static void main(String[] args) {
        VideoConversionFacade converter = new VideoConversionFacade();
        File mp4Video = converter.convertVideo("youtubevideo.ogg", "mp4");
        // ...
    }
}
~

#### OutputDemo.txt: Execution result

```
VideoConversionFacade: conversion started.
CodecFactory: extracting ogg audio...
BitrateReader: reading file...
BitrateReader: writing file...
AudioMixer: fixing audio...
VideoConversionFacade: conversion completed.
```


That was all about the adapter design pattern! As always thanks for reading this article.
You can find the whole code of this article at [this address](https://github.com/metao1/design-patterns/tree/master/src/main/java/com/metao/dp/facade).

To check another deign patterns's example on GitHub check [GitHub project](https://github.com/metao1/design-patterns)


