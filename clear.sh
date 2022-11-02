#!/bin/bash

# This script is used for clearing deletable folders in this project.

# Variables.
BUILD_FOLDER="./build"
COVERAGE_FOLDER="./coverage"

# Define function
remove_folder () {
	if [ -d $1 ] 
	then
		rm -r $1
	fi
}

# Call function
echo "Starting to remove folders: ${BUILD_FOLDER}, ${COVERAGE_FOLDER}"
remove_folder $BUILD_FOLDER
remove_folder $COVERAGE_FOLDER
echo "Folders removed"